<script>
 import { API_URL } from "./config";
  let first_name = "",
    last_name = "",
    email = "",
    phone = "";
  export let resp;
  async function doPost() {
    if (!validateForm()) {
      return;
    }

    var formdata = new FormData();
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("email", email);
    formdata.append("phone", phone);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch(`${API_URL}/users/new`, requestOptions)
      .then((response) => response.text())
      // .then((result) => console.log(result))
      .then((result) => (resp = JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }
  function validateForm() {
    if (first_name === "") {
      alert("Please enter your first name.");
      return false;
    }
    if (last_name === "") {
      alert("Please enter your last name.");
      return false;
    }
    if (email === "") {
      alert("Please enter your email address.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (phone === "") {
      alert("Please enter your phone number.");
      return false;
    }
    return true;
  }
</script>

<form class="content">
  <label for="first_name">First Name:</label>
  <input class="row" type="text" bind:value={first_name} />

  <label for="last_name">Last Name</label>
  <input class="row" type="text" bind:value={last_name} />

  <label for="email">Email</label>
  <input class="row" type="text" bind:value={email} />

  <label for="phone">Phone:</label>
  <input class="row" type="text" bind:value={phone} />
</form>
<button type="button" on:click={doPost}>Submit</button>

<style>
  .content {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 10px;
    row-gap: 10px;
    flex-basis: 1 0 0;
  }
  .row {
    margin-radius: 5px;
  }
  button {
    margin-top: 10px;
    flex-grow: 1;
  }
  button:hover {
    background-color: #008744;
  }
</style>
