const shoes = [
  {
    name: "Campus shoes",
    imageUrl: "https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?s=612x612",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 900,
    counterInStock: 30
  },

  {
    name: "Nike shoes",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 2999,
    counterInStock: 30
  },

  {
    name: "Sneakers",
    imageUrl: "https://media.istockphoto.com/photos/sneakers-with-clipping-path-picture-id175537625?b=1&k=20&m=175537625&s=170667a&w=0&h=3ayXmgvGE3zsRn2v4jJffLzyk3iyDsyqbTlrSVJxmu4=",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1000,
    counterInStock: 30
  },

  {
    name: "Puma shoes",
    imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 2200,
    counterInStock: 30
  },

  {
    name: "Partyware shoes",
    imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1400,
    counterInStock: 30
  },

  {
    name: "Nike Renewed",
    imageUrl: "https://unsplash.com/photos/updW-QUccFE",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1000,
    counterInStock: 30
  },


  {
    name: "Puma renewed",
    imageUrl: "https://unsplash.com/photos/kLnlaZJ4SMA",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1000,
    counterInStock: 30
  },

  {
    name: " Campus (Women)",
    imageUrl: "https://media.istockphoto.com/photos/sport-shoes-picture-id477850598?b=1&k=20&m=477850598&s=170667a&w=0&h=8bX1Of9oWVwHBJSG-qxUmFr4XZhmfXMZAbFQRv7wtmE=",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1000,
    counterInStock: 30
  },

  {
    name: " Sport shoes (Women)",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1000,
    counterInStock: 30
  },

  {
    name: " Party ware (women)",
    imageUrl: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1899,
    counterInStock: 30
  },

  {
    name: "White sneakers",
    imageUrl: "https://media.istockphoto.com/photos/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-picture-id1248566148?b=1&k=20&m=1248566148&s=170667a&w=0&h=gbRN5o0IIW6ylAzcEBiG5hq22mD_FADTM1TBA9nkDEg=",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1899,
    counterInStock: 30
  },

  {
    name: "Loafers",
    imageUrl: "https://media.istockphoto.com/photos/shoes-picture-id184358724?b=1&k=20&m=184358724&s=170667a&w=0&h=mS6lmArTpS6F6HQunTaYMwqzHCtUOYlPXcsn1csurIc=",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 900,
    counterInStock: 30
  },

];

module.exports = shoes;