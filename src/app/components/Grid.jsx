// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Grid Layout Example</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       background-color: black;
//       color: white;
//       margin: 0;
//       padding: 0;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       min-height: 100vh;
//     }

//     .grid-container {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
//       grid-template-rows: repeat(2, 1fr);   /* 2 equal rows */
//       gap: 20px;                            /* Space between grid items */
//       max-width: 1200px;
//       width: 100%;
//       padding: 20px;
//     }

//     .grid-item {
//       background-color: #1a1a1a;
//       padding: 20px;
//       border-radius: 12px;
//       text-align: center;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
//     }

//     .grid-item img {
//       width: 50px;
//       height: 50px;
//       margin-bottom: 15px;
//     }

//     .grid-item h3 {
//       margin: 10px 0 5px;
//       font-size: 1.2rem;
//       color: #f97316; /* Orange accent */
//     }

//     .grid-item p {
//       font-size: 0.9rem;
//       color: #d4d4d4;
//     }
//   </style>
// </head>
// <body>
//   <div class="grid-container">
//     <div class="grid-item">
//       <img src="icon1.png" alt="Speak & Ask">
//       <h3>Speak & Ask</h3>
//       <p>Ask unlimited questions, get unlimited answers.</p>
//     </div>
//     <div class="grid-item">
//       <img src="icon2.png" alt="Identify Objects">
//       <h3>Identify Objects</h3>
//       <p>Identify and get more information about what you see.</p>
//     </div>
//     <div class="grid-item">
//       <img src="icon3.png" alt="Magic Camera">
//       <h3>Magic Camera</h3>
//       <p>Put a magical twist on photos taken with the camera.</p>
//     </div>
//     <div class="grid-item">
//       <img src="icon4.png" alt="Bidirectional Translation">
//       <h3>Bidirectional Translation</h3>
//       <p>Instantly translate between more than 100 languages.</p>
//     </div>
//     <div class="grid-item">
//       <img src="icon5.png" alt="Visual Interpretation">
//       <h3>Visual Interpretation</h3>
//       <p>Understand any language with the camera.</p>
//     </div>
//     <div class="grid-item">
//       <img src="icon6.png" alt="Memory Recall">
//       <h3>Memory Recall</h3>
//       <p>Recall past conversations, notes, and more.</p>
//     </div>
//   </div>
// </body>
// </html>
