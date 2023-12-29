<template>
  <div class="container">
    <div class="content-box">
      <h2 class="title">We are doing some fixes! Be back soon.</h2>
      <p class="message">
        Hello,
        <br>
        <br>
        We are very sorry for the trouble, but a problem has come up with the Etsy app. We are temporarily pausing operations to fix the issue and intend to resume shortly.
        <br>
        <br>
        We are fulfilling all orders currently sent through to us. However, the integrity of our service is of utmost importance to us.
        <br>
        <br>
        We have written a blog post that goes into more detail on the Slant 3D Website. If you are in need of assistance, please email <a href="mailto:info@slant3d.com">info@slant3d.com</a>.
        <br>
        <br>
        Thank you so much for your patience.
        <br>
        <br>
        - The Team at Slant 3D
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
}

.content-box {
  max-width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* text-align: center; */
}

.title {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.message {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
