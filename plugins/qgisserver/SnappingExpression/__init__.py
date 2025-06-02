from qgis.core import QgsCoordinateReferenceSystem, QgsProject, QgsPointXY, QgsCoordinateTransform, QgsMessageLog, \
    Qgis, QgsExpression
from qgis.utils import qgsfunction


@qgsfunction(args='auto', group='sagta')
def snap_x_axis(x_min, y_max, map_scale, map_crs, geo_crs, feature, parent):
    """Calculates the snap x-coordinate for the top-left corner of the layout.
    :param x_min: The minimum x-coordinate of the bounding box
    :type x_min: float
    
    :param y_max: The maximum y-coordinate of the bounding box
    :type y_max: float

    :param map_scale: The scale of the current map layout
    :type map_scale: float
    
    :param map_crs: Map coordinate system
    :type map_crs: str
    
    :param geo_crs: Geographic coordinate system used for transformation
    :type geo_crs: str

    :param feature: QGIS function property
    :type feature: property

    :param parent: QGIS function property
    :type parent: property
    
    :return: The snap Y-coordinate
    :rtype: float
    """

    # Converts the decimal degrees to degrees, minutes, seconds
    deg, min_value, sec = get_deg_min_sec(x_min)

    snap_min = get_snap_min(map_scale, min_value, sec)
    # Calculates the X-axis snapping coordinate
    snap_coordinate = deg + (snap_min / 60)

    # Transforms the geographic coordinates to the map coordinates
    x, y = transform_coordinates(snap_coordinate, y_max, QgsCoordinateReferenceSystem(geo_crs),
                                 QgsCoordinateReferenceSystem(map_crs))

    return x


@qgsfunction(args='auto', group='sagta')
def snap_y_axis(x_min, y_max, map_scale, map_crs, geo_crs, feature, parent):
    """Calculates the snap y-coordinate for the top-left corner of the layout.
    :param x_min: The minimum x-coordinate of the bounding box
    :type x_min: float
    
    :param y_max: The maximum y-coordinate of the bounding box
    :type y_max: float

    :param map_scale: The scale of the current map layout
    :type map_scale: float
    
    :param map_crs: Map coordinate system
    :type map_crs: str
    
    :param geo_crs: Geographic coordinate system used for transformation
    :type geo_crs: str

    :param feature: QGIS function property
    :type feature: property

    :param parent: QGIS function property
    :type parent: property
    
    :return: The snap y-coordinate
    :rtype: float
    """

    # Converts the decimal degrees to degrees, minutes, seconds
    deg, min_value, sec = get_deg_min_sec(abs(y_max))

    snap_min = get_snap_min(map_scale, min_value, sec)
    snap_coordinate = -(deg + (snap_min / 60))

    # Transforms the geographic coordinates to the map coordinates
    x, y = transform_coordinates(x_min, snap_coordinate, QgsCoordinateReferenceSystem(geo_crs),
                                 QgsCoordinateReferenceSystem(map_crs))

    return y


def get_snap_min(map_scale, _min, sec):
    """Determines the snap coordinate for the provided minute depending on the
    map scale.
    
    :param map_scale: The map scale used by the current map
    :type map_scale: float
    
    :param _min: The minute value of the current top-left position
    :type _min: int
    
    :param sec: The seconds of the current top-left position
    :type sec: float
    
    :return: The snap coordinate based on the scale
    :rtype: float
    """

    if 23000 <= map_scale < 27000 or 48000 <= map_scale < 52000:  # 25k and 50k:
        if sec >= 30:
            # Rounds the minute value up by 1
            snap_min = _min + 1
        else:
            # Leave the minute value as is
            snap_min = _min
    elif 98000 <= map_scale < 110000:  # 100k:
        if (_min / 2 - abs(_min / 2)) >= 0.5:
            # Rounds the minute value up by 2
            snap_min = _min + 2
            if snap_min % 2 == 1:  # Value should be even
                snap_min = _min + 1
        else:
            # Leave the minute value as is
            snap_min = _min
            if snap_min % 2 == 1:  # Value should be even
                snap_min = _min + 1
    elif map_scale >= 140000:  # 150k
        remainder = (_min / 4) - float(int(_min / 4))
        if 0 < remainder <= 0.25:
            snap_min = _min - 1
        elif 0.25 < remainder <= 0.5:
            snap_min = _min + 2
        elif 0.5 < remainder <= 0.75:
            snap_min = _min + 1
        else:
            # Leave the minute value as is
            snap_min = _min

    return snap_min


def get_deg_min_sec(dd_value):
    """Calculates and returns the degrees, minutes, and seconds from the provided
    decimal degree value.
    
    :param dd_value: Decimal degrees value
    :type dd_value: float
    
    :return: degrees, minutes, and seconds
    :rtype: int/float
    """

    deg = int(dd_value)  # Degrees
    minutes = int((dd_value - deg) * 60)  # Minutes

    min_tmp = minutes / 60
    sec = (dd_value - deg - min_tmp) * 3600  # Seconds

    return deg, minutes, sec


def transform_coordinates(x, y, curr_crs, target_crs):
    """Transforms coordinates from one coordinate system to another
    :param x: Y-coordinate
    :type x: float
    
    :param y: X-coordinate
    :type y: float
    
    :param curr_crs: Current coordinate system of the coordinates
    :type curr_crs: QgsCoordinateReferenceSystem
    
    :param target_crs: Coordinate system to which the coordinates should be converted
    :type target_crs: QgsCoordinateReferenceSystem
    
    :return: X- and Y-coordinates
    :rtype: float
    """

    transform_context = QgsProject.instance().transformContext()
    xform = QgsCoordinateTransform(curr_crs, target_crs, transform_context)

    # Creates and uses a temporary point to perform the transformation
    point = QgsPointXY(x, y)
    pt = xform.transform(point)

    return pt.x(), pt.y()


class SnappingPlugin:
    def __init__(self):
        QgsMessageLog.logMessage('Loading expressions', 'ServerExpression', Qgis.Info)
        # QgsExpression.registerFunction(get_deg_min_sec)


def serverClassFactory(serverIface):
    _ = serverIface
    return SnappingPlugin()
