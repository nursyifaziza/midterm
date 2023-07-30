# Mid-Term Project (Backend)

**1️⃣ Database Structure**
----
* Video
```
{
  link: String,
  title: String,
  thumbnail: String
}
```

* Product
```
{
    videoId: {type: ObjectId, ref: 'Video'},
    link: String,
    title: String,
    price: Number
}
```

* Comment
```
{
    videoId: {type: ObjectId, ref: 'Video'},
    username: {type: String, required: true},
    comment: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
}
```

**2️⃣ API Structure**
----
| HTTP Verb    | Endpoint           | Actions                          |
| :---         | :---               | :---                             |
| GET          | /api/videos        | Get all videos                   |
| GET          | /api/videos/:id    | Get a video detail by videoId    |
| GET          | /api/videos/:id    | Get all products by videoId      |
| GET          | /api/comments/:id  | Get all comments by videoId      |
| POST         | /api/comments/:id  | Post a comment on a video        |

**3️⃣ List of API Contracts**
----
**GET /videos**
----
  Returns all videos.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```

[
   {<video_object>},
   {<video_object>},
   {<video_object>},
   {<video_object>},
   {<video_object>}
]
```

**GET /video/:id**
----
  Returns the specified video.
* **URL Params**  
  Required: id=[string]
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <video_object> }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "message" : "Video doesn't exist" }`

**GET /products/:id**
----
  Returns all products associated with the specified video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
   {<product_object>},
   {<product_object>},
   {<product_object>}
]
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "message" : "Currently, there are no products associated with this video" }`

  **GET /comments/:id**
----
  Returns all comments associated with the specified video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
   {<product_object>},
   {<product_object>},
   {<product_object>}
]
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "message" : "There are no comments" }`

**POST /comments/:id**
----
  Creates a new comment on the associated video and returns the new object.
* **URL Params**  
  *Required:* `id=[string]`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    "username": string,
    "comment": string
  }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <comment_object> }`
* **Error Response:**  
  * **Code:** 400 
  **Content:** `{ "message" : "Comment is invalid" }`

**4️⃣ How to Run in Local**
----
* Clone this repository
```
git clone https://github.com/nursyifaziza/midterm
```
* Install the dependencies
```
npm install
```
* Run the server
```
npm start
```
