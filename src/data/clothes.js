const clothes = [
  {
    name: "Wedding Dress Pearl White",
    imageUrl: "https://images.unsplash.com/photo-1548764704-46f748bcc571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzc4NjUzOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1299,
    counterInStock: 30
  },
  {
    name: "Blue Diamond Stiched Dress",
    imageUrl: "https://images.unsplash.com/photo-1617258856138-402b60da4e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzMTYxMzE0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 999,
    counterInStock: 30
  },
  {
    name: "Black T-Shirt",
    imageUrl: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyODkzMTk2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 299,
    counterInStock: 30
  },
  {
    name: "Black Leather Jacket with White T-Shirt",
    imageUrl: "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzc4ODE0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 799,
    counterInStock: 30
  },
  {
    name: "HandStiched Red Dress for Partywear",
    imageUrl: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzMTYxMTk4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1099,
    counterInStock: 30
  },
  {
    name: "Black Hoodie with Brown CowBoy Hat",
    imageUrl: "https://images.unsplash.com/photo-1578681994506-b8f463449011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjY0NjgxNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 799,
    counterInStock: 30
  },
  {
    name: "White Short Dress for Casual",
    imageUrl: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4MTQ1MTU3&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 499,
    counterInStock: 30
  },
  {
    name: "Professional Work Blue Suit",
    imageUrl: "https://images.unsplash.com/photo-1593030942428-a5451dca4b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjQ2NTk0Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 1199,
    counterInStock: 30
  },
  {
    name: "Black Coat with Blue Denim",
    imageUrl: "https://images.unsplash.com/photo-1592878849122-facb97520f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzc4ODczMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 899,
    counterInStock: 30
  },
  {
    name: "Black Suit",
    imageUrl: "https://images.unsplash.com/photo-1497339100210-9e87df79c218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 699,
    counterInStock: 30
  },
  {
    name: "Brown leather long sleeve Shirt",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 599,
    counterInStock: 30
  },
  {
    name: "Yellow and White Floral Dress",
    imageUrl: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyODYyMjkx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 499,
    counterInStock: 30
  },
  {
    name: "Green sleveless Dress with matt finish",
    imageUrl: "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzNDI5ODgz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 799,
    counterInStock: 30
  },
  {
    name: "Variety of Color T-Shirt All",
    imageUrl: "https://images.unsplash.com/photo-1562157873-818bc0726f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 999,
    counterInStock: 30
  },
  {
    name: "Black Denim T-Shirt",
    imageUrl: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyODkzMTk2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos eius dignissimos aliquam quo, quasi inventore perspiciatis cum itaque obcaecati deserunt fugit officia sed nesciunt repellendus harum doloremque molestias pariatur!",
    price: 299,
    counterInStock: 30
  },
];

module.exports = clothes;