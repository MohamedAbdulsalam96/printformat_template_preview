<template>
    <div class="container.main-page">
      <div class="main-content">
        <!-- <p>hihi</p> -->
        <div class="marketing-info">
          <ul class="features">
            <li v-for="(feature, index) in features" :key="index" class="feature">
              <div class="feature-icon">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 38 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.8036 0.0802048C1.71545 1.59912 -4.94777 18.1486 4.20075 28.8987C12.7871 38.988 29.9228 36.0763 34.4496 23.759C36.7899 17.3912 35.399 10.4063 32.3819 13.3768L31.7658 13.9834L31.906 15.3344C32.6083 22.104 29.6677 27.5325 23.8274 30.2485C14.8086 34.4426 4.21295 28.2392 3.57156 18.3895C2.83827 7.13083 15.2314 -0.222569 25.2226 5.54266C27.0444 6.59401 28.4383 6.01735 28.4383 4.21254C28.4383 1.96784 20.9655 -0.476446 15.8036 0.0802048ZM34.8893 1.65898C34.6949 1.76286 30.6216 5.6923 25.8375 10.3912L17.1389 18.9343L14.517 16.3886C12.4 14.3332 11.7722 13.8202 11.2569 13.725C9.65155 13.4285 8.33096 14.8134 8.72544 16.3795C8.85941 16.9109 15.296 23.4146 16.102 23.833C16.7126 24.1498 17.5442 24.149 18.1521 23.8309C18.7287 23.5291 37.5096 5.01298 37.7871 4.47268C38.6743 2.74461 36.6097 0.739694 34.8893 1.65898Z"
                    fill="#5CB946"
                  />
                </svg>
              </div>
              <div v-html="feature"></div>
            </li>
          </ul>
          <button class="btn btn-primary btn-sm btn-block" type="button" onclick="location.href='/app/pd-preview';">
            Go to Viewer
          </button>
        </div>
        <div class="about">
          <h1 style="font-size:3em">Aerele Technologies</h1>
          <span>At Aerele, we're a team of 15+ seasoned Frappe and ERPNext developers, specializing in custom ERPNext solution and Frappe-based product development.</span>
          <br/>
          <h4>Our recent projects</h4>
          <ul class="projects">
            <li v-for="(project,index) in projects" :key="index" class="project">
                <div v-html="project" style="font-size:1.5em"></div>
            </li>
          </ul>
          <p>Looking for expert customization? We're here to help.
            <br/>
          Have a product idea? Let's bring it to life.</p>
          <div class="responsive-button">
            <button class="btn btn-primary btn-sm" type="button" onclick="location.href='https://insider.frappe.cloud/contact-us';">
              Contact us
            </button>
          </div>                       
        </div>
      </div>
    </div>
  </template>  
  <script setup>
import { ref, computed } from 'vue';

const features = ref([
  "Instantly preview print format templates with real data - no need for guesswork.",
  "Seamlessly import your preferred template and fine-tune it using Frappe’s powerful <a href='https://github.com/frappe/print_designer' style='text-decoration: underline;'>print designer</a>.",
  "Need advanced customisations? Our team at Aerele Technologies, with 15+ expert Frappe developers, is ready to help you tailor the pixel perfect print format.",
]);

const projects = ref([
  "India Banking Integration",
  "PWA Builder",
  "Frappe Chatbots",
  "Medusa Integration"
])

const isAccountRegistered = ref(false);

const toggleAuthView = () => {
  isAccountRegistered.value = !isAccountRegistered.value;
};
</script>

  
<style lang="scss" scoped>
.container.main-page {
  padding: 5em;
}
.page-container[data-page-route=print-format-preview] {
  min-height: calc(100vh - 60px) !important;
}


.responsive-button {
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
  width: 100%;
}

 span{
  font-size: 1.5em;
  text-align: justify;
 }

 h4{
  font-size: 1.5em;
  font-weight: bold;
 }

 p {
  font-size: 1.5em;
 }

.main-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4em;
  font-size: 1em;
  gap:5em
}

.marketing-info {
  max-width: 28%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.about {
  max-width: 28%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.aerele-logo {
  display: flex;
  flex-direction: row;
  gap:1em;
  align-items: end;
}


.change-view-btn a {
  color: #5CB946;
  text-decoration: underline;
}

.change-view-btn a:hover {
  text-decoration: none;
}

.features {
  list-style: none;
  padding-left: 0;
  text-align: start;
}
.projects {
  padding-left: 2;
  text-align: start;
}

.features .feature {
  font-size: 1.5em;
  margin: 0.7em 0;
  display: flex;
  align-items: center;
  text-align: justify;
}

.projects.project {
  margin: 0.7em 0;
  display: flex;
  align-items: center;
  text-align: start;
}

.features .feature-icon {
  fill: #5dbe46;
  font-size: 1em;
  margin-right: 0.6em;
}

.title {
  font-size: 2.5em;
  font-weight: bold;
  line-height: 1.3;
}

@media (max-width: 991px) {
  .main-content {
    flex-direction:column-reverse;
    align-items: center;
    font-size: 0.9em;
    padding: 0;
    gap:9em;
  }

  .main-content > * {
    margin: 1em 0;
  }

  .marketing-info{
    padding: 0.5em;
    max-width: 100%;
  }

  .marketing-info {
    text-align: center;
    align-items: center;
  }

  .responsive-button {
    padding: 1em;
    justify-content: end;
  }

  
}

@media (max-width: 575px) {
  .container.main-page {
    padding:0;
  }

  .responsive-button {
    padding: 0em;
    justify-content: start;
  }

  .responsive-button .btn {
     padding-left: 1.5em;
     padding-right: 1.5em;
  }

  .main-content {
    font-size: 0.75em;
    justify-content: start;
    gap:1em;
  }
  .marketing-info{
    margin-top: 0;
    max-width: 100%;
  }
  .about{
    max-width: 100%;
  }
}
</style>
  