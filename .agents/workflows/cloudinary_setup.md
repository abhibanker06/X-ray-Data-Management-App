---
description: How to setup and use Cloudinary for image uploads
---

# Cloudinary Setup and Usage Workflow

Follow these steps to set up and use Cloudinary for persistent image storage and rendering.

## 1. Cloudinary Setup

1.  Create a free account at [Cloudinary](https://cloudinary.com/).
2.  Go to your **Dashboard**.
3.  Copy your **Cloud Name**, **API Key**, and **API Secret**.

## 2. Environment Configuration

Add the following credentials to your `.env` file in the `backend/` directory:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 3. Implementation Steps (To be performed by Antigravity)

1.  **Install Dependencies**: `cloudinary`, `multer-storage-cloudinary`.
2.  **Configure Storage**: Update `backend/config/multer.js` to use `CloudinaryStorage`.
3.  **Update Model**: Modify `backend/models/imageModel.js` to include `imageUrl` and `publicId`.
4.  **Update Controller**: Update `backend/controllers/imageController.js` to handle uploads to Cloudinary and deletion by `publicId`.

## 4. Usage

### Uploading an Image
- Send a `POST` request to `/api/images` with the image file in the `image` field of the `multipart/form-data` request.
- The backend will upload the image to Cloudinary and save the resulting URL in the database.

### Rendering an Image
- When fetching images (e.g., via `GET /api/images`), the response will include the `imageUrl`.
- In your frontend index.html or React components, simply use the `imageUrl` as the `src` for your `<img>` tags:
  ```html
  <img src={image.imageUrl} alt={image.originalName} />
  ```

### Deleting an Image
- Send a `DELETE` request to `/api/images/:id`.
- The backend will delete the image from Cloudinary using its unique `publicId` and remove its record from the database.
