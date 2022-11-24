import "./profileComponent.css";

function ProfileComponent() {
  return (
    <div class="card">
      <div class="top-container">
        <img
          alt=""
          src="https://i.imgur.com/G1pXs7D.jpg"
          class="img-fluid profile-image"
          width="70"
        />

        <div class="ml-3">
          <h5 class="name">송재근</h5>
          <p class="mail">drow724@naver.com</p>
        </div>
      </div>

      <div class="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
        Java & Spring Backend Developer
      </div>

      <div class="wishlist pt-2">
        <span class="wishlist">Recent Order</span>
      </div>
      <div class="wishlist pt-2">
        <span class="wishlist">Wishlist</span>
      </div>
      <div class="fashion-studio pt-2">
        <span class="fashion-studio">Fashion studio</span>
      </div>
    </div>
  );
}

export default ProfileComponent;
