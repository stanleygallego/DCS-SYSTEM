<script setup>
import { ref, computed } from 'vue'

// State
const search = ref('')
const selectedCategory = ref('all')
const currentView = ref('gallery')
const selectedItem = ref(null)
const activeTab = ref('description')
const showContactDialog = ref(false)
const showInquiryDialog = ref(false)
const showInquirySuccess = ref(false)

const inquiryForm = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const appBarTitle = computed(() => {
  return currentView.value === 'gallery'
    ? 'Furniture Gallery'
    : selectedItem.value?.name || 'Product Details'
})

const furniture = ref([
  {
    id: 1,
    name: 'Modern Sofa',
    category: 'living',
    price: 899.99,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'Comfortable modern sofa with premium fabric upholstery, perfect for your living room.',
  },
  {
    id: 2,
    name: 'Coffee Table',
    category: 'living',
    price: 249.99,
    image: '/src/assets/images/kape.jpg',
    description:
      'Elegant coffee table with a glass top and wooden base, adds style to any living space.',
  },
  {
    id: 3,
    name: 'Queen Bed Frame',
    category: 'bedroom',
    price: 599.99,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: 'Sturdy queen-sized bed frame with a padded headboard for maximum comfort.',
  },
  {
    id: 4,
    name: 'Wardrobe',
    category: 'bedroom',
    price: 799.99,
    image:
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: 'Spacious wardrobe with multiple compartments and a full-length mirror.',
  },
  {
    id: 5,
    name: 'Dining Table',
    category: 'kitchen',
    price: 499.99,
    image:
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'Extendable dining table that seats up to 8 people, perfect for family gatherings.',
  },
  {
    id: 6,
    name: 'Bar Stools',
    category: 'kitchen',
    price: 129.99,
    image:
      'https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: 'Set of 2 adjustable height bar stools with footrests and comfortable seating.',
  },
  {
    id: 7,
    name: 'Custom Bookshelf',
    category: 'custom',
    price: 349.99,
    image: '/src/assets/images/shelf.jpg',
    description:
      'Customizable bookshelf with adjustable shelves to fit your specific needs and space.',
  },
  {
    id: 8,
    name: 'Custom TV Stand',
    category: 'custom',
    price: 279.99,
    image: '/src/assets/images/tv.jpg',
    description: 'Made-to-order TV stand with cable management and storage options.',
  },
  {
    id: 9,
    name: 'Armchair',
    category: 'living',
    price: 349.99,
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: 'Comfortable armchair with high-quality fabric and sturdy wooden legs.',
  },
  {
    id: 10,
    name: 'Nightstand',
    category: 'bedroom',
    price: 149.99,
    image:
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: 'Elegant nightstand with drawer and shelf, perfect for bedside storage.',
  },
  {
    id: 11,
    name: 'Kitchen Island',
    category: 'kitchen',
    price: 699.99,
    image: '/src/assets/images/kusina.jpg',
    description: 'Multifunctional kitchen island with storage space and breakfast bar.',
  },
  {
    id: 12,
    name: 'Custom Desk',
    category: 'custom',
    price: 429.99,
    image:
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'Custom-built desk designed to your specifications with built-in cable management.',
  },
])

const filteredFurniture = computed(() => {
  let result = furniture.value

  if (selectedCategory.value !== 'all') {
    result = result.filter((item) => item.category === selectedCategory.value)
  }

  if (search.value) {
    const searchLower = search.value.toLowerCase()
    result = result.filter(
      (item) =>
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower),
    )
  }

  return result
})

const relatedProducts = computed(() => {
  if (!selectedItem.value) return []

  return furniture.value
    .filter(
      (item) => item.category === selectedItem.value.category && item.id !== selectedItem.value.id,
    )
    .slice(0, 4)
})

const getCategoryLabel = (category) => {
  const labels = {
    living: 'Living Room',
    bedroom: 'Bedroom',
    kitchen: 'Kitchen',
    custom: 'Custom',
  }
  return labels[category] || category
}

const getDimensions = (item) => {
  const dimensions = {
    living: '200 × 90 × 85 cm',
    bedroom: '160 × 200 × 45 cm',
    kitchen: '180 × 90 × 75 cm',
    custom: '120 × 60 × 180 cm',
  }
  return dimensions[item.category] || '100 × 100 × 100 cm'
}

const getWeight = (item) => {
  return Math.round(item.price / 20)
}

const getSku = (item) => {
  return `${item.category.toUpperCase().substring(0, 3)}-${item.id.toString().padStart(4, '0')}`
}

const getCountryOfOrigin = (item) => {
  const countries = {
    living: 'Italy',
    bedroom: 'Sweden',
    kitchen: 'Germany',
    custom: 'United States',
  }
  return countries[item.category] || 'China'
}

const viewDetails = (item) => {
  selectedItem.value = item
  currentView.value = 'details'
  activeTab.value = 'description'
  window.scrollTo(0, 0)
}

const backToGallery = () => {
  currentView.value = 'gallery'
  selectedItem.value = null
}

const selectImage = (imageIndex) => {
  console.log(`Selected image ${imageIndex}`)
}
</script>

<template>
  <v-app>
    <v-app-bar color="brown" dark app>
      <v-app-bar-nav-icon
        v-if="currentView === 'details'"
        @click="backToGallery"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>DCS WOODWORKS</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-if="currentView === 'gallery'"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        density="compact"
        class="mt-2 mr-4"
        bg-color="primary-lighten-1"
        style="max-width: 250px"
      ></v-text-field>
    </v-app-bar>

    <v-main class="overflow-y-auto">
      <v-container fluid v-if="currentView === 'gallery'" class="pb-16">
        <v-row>
          <v-col cols="12">
            <v-card class="mb-6">
              <v-card-title class="text-h5"> Browse Our Furniture Collection </v-card-title>
              <v-card-text>
                Discover high-quality furniture for every room in your home.
              </v-card-text>
              <v-card-actions>
                <v-chip-group
                  v-model="selectedCategory"
                  selected-class="bg-primary text-white"
                  mandatory
                >
                  <v-chip value="all">All Furniture</v-chip>
                  <v-chip value="living">Living Room</v-chip>
                  <v-chip value="bedroom">Bedroom</v-chip>
                  <v-chip value="kitchen">Kitchen</v-chip>
                  <v-chip value="custom">Custom</v-chip>
                </v-chip-group>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="item in filteredFurniture" :key="item.id" cols="12" sm="6" md="4" lg="3">
            <v-card height="100%" class="d-flex flex-column">
              <v-img :src="item.image" height="200" cover class="bg-grey-lighten-2">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <v-card-title>{{ item.name }}</v-card-title>

              <v-card-subtitle>
                <v-chip size="small" color="primary" class="mr-2">{{
                  getCategoryLabel(item.category)
                }}</v-chip>
                <span class="text-primary font-weight-bold">P{{ item.price.toFixed(2) }}</span>
              </v-card-subtitle>

              <v-card-text class="flex-grow-1">
                {{ item.description }}
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" variant="tonal" @click="viewDetails(item)">
                  View Details
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-heart-outline" variant="text"></v-btn>
                <v-btn icon="mdi-share-variant-outline" variant="text"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row v-if="filteredFurniture.length === 0">
          <v-col cols="12" class="text-center">
            <v-alert type="info" class="mx-auto" max-width="500">
              No furniture items match your search criteria.
            </v-alert>
          </v-col>
        </v-row>
      </v-container>

      <v-container v-else-if="currentView === 'details' && selectedItem" fluid class="pb-16">
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="mb-4">
              <v-img :src="selectedItem.image" height="400" cover class="bg-grey-lighten-2">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <v-card-actions class="pa-4">
                <v-row>
                  <v-col v-for="n in 4" :key="n" cols="3">
                    <v-img
                      :src="selectedItem.image"
                      height="80"
                      cover
                      class="bg-grey-lighten-2 rounded cursor-pointer border"
                      @click="selectImage(n)"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card>
              <v-card-title class="text-h4 pt-4 pb-2">{{ selectedItem.name }}</v-card-title>

              <v-card-subtitle>
                <v-chip color="primary" class="mr-2">{{
                  getCategoryLabel(selectedItem.category)
                }}</v-chip>
              </v-card-subtitle>

              <v-card-text>
                <div class="text-h4 font-weight-bold mb-4 text-primary">
                  <span class="mdi mdi-currency-php"></span>{{ selectedItem.price.toFixed(2) }}
                </div>

                <p class="text-body-1 mb-4">{{ selectedItem.description }}</p>

                <v-row class="mt-6">
                  <v-col cols="12" sm="6">
                    <v-btn
                      color="primary"
                      size="large"
                      block
                      prepend-icon="mdi-phone"
                      @click="showContactDialog = true"
                    >
                      Contact Supplier
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-6">
          <v-col cols="12"> </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app class="bg-brown text-center d-flex">
      <div></div>
      <div class="white--text pt-2">
        © {{ new Date().getFullYear() }} — <strong>DCS Woodworks</strong>
      </div>
    </v-footer>

    <v-dialog v-model="showContactDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Contact Supplier</v-card-title>
        <v-card-text>
          <p class="mb-4">
            Contact our team to connect with the supplier of {{ selectedItem?.name }}.
          </p>
          <v-list>
            <v-list-item prepend-icon="mdi-phone">
              <v-list-item-title>+ 63970654321</v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-facebook">
              <v-list-item-title>Diego Wasiniga</v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-map-marker">
              <v-list-item-title>Ampayon Butuan City</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="showContactDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style>
.v-card {
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1) !important;
}

.cursor-pointer {
  cursor: pointer;
}

/* Fix for vertical scrolling */
html,
body {
  height: 100%;
  overflow-y: auto;
}

.v-application {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.v-main {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.v-container {
  flex: 1;
}

/* Add padding to bottom of containers to ensure content isn't hidden by footer */
.pb-16 {
  padding-bottom: 64px;
}

/* Fix for mobile devices */
@media (max-width: 600px) {
  .v-main {
    padding-bottom: 56px !important;
  }
}
</style>
