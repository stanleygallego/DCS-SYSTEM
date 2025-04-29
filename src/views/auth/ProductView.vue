<script setup>
// no logic needed yet
</script>

<template>
  <div class="container">
    <!-- First Card -->
    <div class="card click-card">Click me</div>

    <!-- Second Card -->
    <div class="card about-card">
      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis quae ducimus
        obcaecati dolore sapiente asperiores officiis. Praesentium quisquam, id quam inventore
        consequuntur vel necessitatibus error tempora. Magnam, ducimus amet.</span
      >
      <div class="info">Short description about yourself.</div>
      <div class="share"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center; /* center vertically */
  justify-content: center; /* center horizontally */
  gap: 50px; /* space between cards */
  height: 100vh; /* full screen height */
}

/* Base card style */
.card {
  box-sizing: border-box;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  user-select: none;
  font-weight: bolder;
  color: black;
  padding: 20px;
}

/* Click Me card */
.click-card {
  width: 300px;
  height: 500px;
  align-items: flex-start;
  justify-content: flex-start;
}

.click-card:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.click-card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

/* About Me card */
.about-card {
  width: 500px;
  height: 200px;
  background: #171717;
  clip-path: round;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  color: white;
}

.about-card span {
  font-weight: bold;
  text-align: center;
  display: block;
  font-size: 1em;
  margin-top: 10px;
}

.about-card .info {
  font-weight: 400;
  text-align: center;
  font-size: 0.72em;
  margin: 1em 0;
}

.about-card .img {
  width: 4.8em;
  height: 4.8em;
  background: white;
  border-radius: 15px;
  margin: auto;
}

.about-card .share {
  margin-top: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
}

.about-card a {
  color: white;
  transition: 0.4s ease-in-out;
  font-size: 0.8em;
}

.about-card a:hover {
  color: red;
}

.about-card button {
  padding: 0.8em 1.7em;
  margin: auto;
  margin-top: 1em;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background: #ffffff;
  color: rgb(0, 0, 0);
  transition: 0.4s ease-in-out;
}

.about-card button:hover {
  background: red;
  color: white;
  cursor: pointer;
}
</style>
