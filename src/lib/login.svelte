<script lang="ts">
  let error : any;
</script>

<h2>Login</h2>
<div class="container">
  <h1>Please login</h1>
  <br />
  <!-- <form action="" method="post">
    <input type="text" placeholder="Username" name="username" value="{{
      request.form.username }}">
     <input type="password" placeholder="Password" name="password" value="{{
      request.form.password }}">
    <input class="btn btn-default" type="submit" value="Login">
  </form> -->
  {#if error}
    <p class="error"><strong>Error:</strong> {{ error }}</p>{/if}
</div>

<style>
  .container {
    width: 500px;
    margin: 0 auto;
  }
</style>
