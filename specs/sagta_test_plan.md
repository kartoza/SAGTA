# SAGTA Map Downloader - Test Plan

## Test Environment
- **Application URL:** https://sta.sagta.kartoza.com/
- **Default Credentials:** username: `admin`, password: `admin`

---

## 1. Authentication
**Seed:** Custom seed for login

### 1.1 Login with Valid Credentials
**Steps:**
1. Navigate to https://sta.sagta.kartoza.com/
2. Enter username "admin" in the username field
3. Enter password "admin" in the password field
4. Click the "Login" button
5. Verify successful login and dashboard is displayed

### 1.2 Logout
**Steps:**
1. Navigate to user menu
2. Click "Logout"
3. Verify user is redirected to login page at https://sta.sagta.kartoza.com/

---

## 2. Project Selection and Browsing
**Precondition:** User is logged in at https://sta.sagta.kartoza.com/

### 2.1 View Available Projects
**Steps:**
1. Observe the list of available projects
2. Verify the following projects are visible:
   - sagta_hybrid
   - sagta_ortho
   - sagta_topo
   - z_global_thematic
   - z_sa
3. Verify each project has a thumbnail or description

---

## 3. Layer Activation and Deactivation for sagta_hybrid Project
**Precondition:** User is logged in and viewing sagta_hybrid project at https://sta.sagta.kartoza.com/

### 3.1 Activate All Layers in sagta_hybrid
**Steps:**
1. Click on sagta_hybrid project to open it
2. Verify the layer panel is displayed on the left or right side of the map
3. Verify all layers are listed in the layer panel
4. For each layer in the panel:
   - Click on the layer checkbox or eye icon to activate it
   - Verify the layer appears on the map
5. Verify all layers are now visible on the map

### 3.2 Deactivate All Layers in sagta_hybrid
**Steps:**
1. For each active layer in the panel:
   - Click on the layer checkbox or eye icon to deactivate it
   - Verify the layer disappears from the map
2. Verify all layers are now hidden on the map
3. Verify the map is empty or shows only the base map

### 3.3 Toggle Individual Layers in sagta_hybrid
**Steps:**
1. Activate the first layer and verify it appears on the map
2. Deactivate it and verify it disappears
3. Randomly select 3-5 more layers and repeat the activation/deactivation cycle
4. Verify each layer toggle works independently without affecting other layers

---

## 4. Layer Activation and Deactivation for sagta_ortho Project
**Precondition:** User is logged in and viewing sagta_ortho project

### 4.1 Activate All Layers in sagta_ortho
**Steps:**
1. Click on sagta_ortho project to open it
2. Verify the layer panel is displayed
3. Verify all layers are listed in the layer panel
4. For each layer in the panel:
   - Click on the layer checkbox or eye icon to activate it
   - Verify the layer appears on the map
5. Verify all layers are now visible on the map

### 4.2 Deactivate All Layers in sagta_ortho
**Steps:**
1. For each active layer in the panel:
   - Click on the layer checkbox or eye icon to deactivate it
   - Verify the layer disappears from the map
2. Verify all layers are now hidden on the map

### 4.3 Toggle Individual Layers in sagta_ortho
**Steps:**
1. Randomly select 3-5 layers and toggle their visibility on and off
2. Verify each layer toggle works independently

---

## 5. Layer Activation and Deactivation for sagta_topo Project
**Precondition:** User is logged in and viewing sagta_topo project

### 5.1 Activate All Layers in sagta_topo
**Steps:**
1. Click on sagta_topo project to open it
2. Verify the layer panel is displayed
3. For each layer in the panel, activate it by clicking the checkbox or eye icon
4. Verify all layers are now visible on the map

### 5.2 Deactivate All Layers in sagta_topo
**Steps:**
1. For each active layer in the panel, deactivate it
2. Verify all layers are now hidden on the map

### 5.3 Toggle Individual Layers in sagta_topo
**Steps:**
1. Randomly select 3-5 layers and toggle their visibility on and off
2. Verify each layer toggle works independently

---

## 6. Layer Activation and Deactivation for z_global_thematic Project
**Precondition:** User is logged in and viewing z_global_thematic project

### 6.1 Activate All Layers in z_global_thematic
**Steps:**
1. Click on z_global_thematic project to open it
2. Verify the layer panel is displayed
3. For each layer in the panel, activate it
4. Verify all layers are now visible on the map

### 6.2 Deactivate All Layers in z_global_thematic
**Steps:**
1. For each active layer in the panel, deactivate it
2. Verify all layers are now hidden on the map

### 6.3 Toggle Individual Layers in z_global_thematic
**Steps:**
1. Randomly select 3-5 layers and toggle their visibility on and off
2. Verify each layer toggle works independently

---

## 7. Layer Activation and Deactivation for z_sa Project
**Precondition:** User is logged in and viewing z_sa project

### 7.1 Activate All Layers in z_sa
**Steps:**
1. Click on z_sa project to open it
2. Verify the layer panel is displayed
3. For each layer in the panel, activate it
4. Verify all layers are now visible on the map

### 7.2 Deactivate All Layers in z_sa
**Steps:**
1. For each active layer in the panel, deactivate it
2. Verify all layers are now hidden on the map

### 7.3 Toggle Individual Layers in z_sa
**Steps:**
1. Randomly select 3-5 layers and toggle their visibility on and off
2. Verify each layer toggle works independently

---

## 8. Download Maps for sagta_hybrid Project

### 8.1 Download sagta_hybrid - A3 Landscape Layout
**Steps:**
1. Click on sagta_hybrid project
2. Select "A3 landscape" layout from the layout options
3. Click "Download" or "Export" button
4. Verify PDF download initiates
5. Verify file is named appropriately (e.g., sagta_hybrid_A3_landscape.**)
6. Verify file content contains valid map data

### 8.2 Download sagta_hybrid - A3 Portrait Layout
**Steps:**
1. Select "A3 portrait" layout from the layout options
2. Click "Download" button
3. Verify PDF download initiates with correct name

### 8.3 Download sagta_hybrid - A4 Landscape Layout
**Steps:**
1. Select "A4 landscape" layout from the layout options
2. Click "Download" button
3. Verify PDF download initiates with correct name

### 8.4 Download sagta_hybrid - A4 Portrait Layout
**Steps:**
1. Select "A4 portrait" layout from the layout options
2. Click "Download" button
3. Verify PDF download initiates with correct name

---

## 9. Download Maps for sagta_ortho Project

### 9.1 Download sagta_ortho - A3 Landscape Layout
**Steps:**
1. Return to project list or navigate to sagta_ortho project
2. Select "A3 landscape" layout
3. Click "Download" button
4. Verify PDF download initiates

### 9.2 Download sagta_ortho - A3 Portrait Layout
**Steps:**
1. Select "A3 portrait" layout
2. Click "Download" button
3. Verify PDF download initiates

### 9.3 Download sagta_ortho - A4 Landscape Layout
**Steps:**
1. Select "A4 landscape" layout
2. Click "Download" button
3. Verify PDF download initiates

### 9.4 Download sagta_ortho - A4 Portrait Layout
**Steps:**
1. Select "A4 portrait" layout
2. Click "Download" button
3. Verify PDF download initiates

---

## 10. Download Maps for sagta_topo Project

### 10.1 Download sagta_topo - A3 Landscape Layout
**Steps:**
1. Navigate to sagta_topo project
2. Select "A3 landscape" layout
3. Click "Download" button
4. Verify PDF download initiates

### 10.2 Download sagta_topo - A3 Portrait Layout
**Steps:**
1. Select "A3 portrait" layout
2. Click "Download" button
3. Verify PDF download initiates

### 10.3 Download sagta_topo - A4 Landscape Layout
**Steps:**
1. Select "A4 landscape" layout
2. Click "Download" button
3. Verify PDF download initiates

### 10.4 Download sagta_topo - A4 Portrait Layout
**Steps:**
1. Select "A4 portrait" layout
2. Click "Download" button
3. Verify PDF download initiates

---

## 11. Download Maps for z_global_thematic Project

### 11.1 Download z_global_thematic - A3 Landscape Layout
**Steps:**
1. Navigate to z_global_thematic project
2. Select "A3 landscape" layout
3. Click "Download" button
4. Verify PDF download initiates

### 11.2 Download z_global_thematic - A3 Portrait Layout
**Steps:**
1. Select "A3 portrait" layout
2. Click "Download" button
3. Verify PDF download initiates

### 11.3 Download z_global_thematic - A4 Landscape Layout
**Steps:**
1. Select "A4 landscape" layout
2. Click "Download" button
3. Verify PDF download initiates

### 11.4 Download z_global_thematic - A4 Portrait Layout
**Steps:**
1. Select "A4 portrait" layout
2. Click "Download" button
3. Verify PDF download initiates

---

## 12. Download Maps for z_sa Project

### 12.1 Download z_sa - A3 Landscape Layout
**Steps:**
1. Navigate to z_sa project
2. Select "A3 landscape" layout
3. Click "Download" button
4. Verify PDF download initiates

### 12.2 Download z_sa - A3 Portrait Layout
**Steps:**
1. Select "A3 portrait" layout
2. Click "Download" button
3. Verify PDF download initiates

### 12.3 Download z_sa - A4 Landscape Layout
**Steps:**
1. Select "A4 landscape" layout
2. Click "Download" button
3. Verify PDF download initiates

### 12.4 Download z_sa - A4 Portrait Layout
**Steps:**
1. Select "A4 portrait" layout
2. Click "Download" button
3. Verify PDF download initiates

---

## Test Summary
- **Total Scenarios:** 37 test scenarios
- **Total Test Cases:** 
  - 1 Authentication (Login)
  - 1 Project verification
  - 15 Layer tests (3 per project × 5 projects)
  - 20 Download tests (4 layouts × 5 projects)

**Acceptance Criteria:**
- Login/logout functions work correctly
- All 5 projects are accessible
- All layers in each project can be activated, deactivated, and toggled
- Each layer appears/disappears on the map when toggled
- Layer toggles work independently
- All 4 layout options work for each project
- All downloads complete successfully
- Downloaded files are valid PDFs
- Files contain proper map content with correct naming