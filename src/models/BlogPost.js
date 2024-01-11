export class BlogPost {
  constructor(data) {
    this.id = data.id || data._id;
    this.title = data.title;
    this.body = data.body;
    this.imgUrl = data.imgUrl;
    this.creatorId = data.creatorId;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
    this.creator = data.creator;
  }
}

let data = {
  _id: "653dc5ada44f14338844e2fe",
  title: "Hey",
  body: "pretty flowers",
  imgUrl:
    "https://images.unsplash.com/photo-1688936020048-0910df928ef1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  tags: [],
  published: true,
  creatorId: "6538400bc6569c8a35c72adc",
  createdAt: "2023-10-29T02:38:37.943Z",
  updatedAt: "2023-10-29T02:38:37.943Z",
  __v: 0,
  creator: {
    _id: "6538400bc6569c8a35c72adc",
    subs: ["auth0|6538400b92357d8db3502c91"],
    email: "sunflower@sunny.com",
    name: "Sunflower",
    picture:
      "https://images.unsplash.com/photo-1691089889229-1b7d52bd3ee0?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "I hope you're having a great day!!!",
    coverImg:
      "https://gifdb.com/images/high/forest-sun-rays-8dvcpwznvqzko8no.gif",
    github: "https://https://github.com/3rinmae",
    linkedin: "",
    resume: "",
    class: "Fall 23",
    graduated: false,
    createdAt: "2023-10-24T22:08:45.282Z",
    updatedAt: "2023-10-29T03:18:10.393Z",
    __v: 0,
    id: "6538400bc6569c8a35c72adc",
  },
  id: "653dc5ada44f14338844e2fe",
};
