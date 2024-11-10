import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import BottomNavbar from "./components/BottomNavbar";
import TopNavbar from "./components/TopNavbar";

// This array holds information about different videos
const videoUrls = [
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require("./videos/video1.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require("./videos/video2.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require("./videos/video3.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require("./videos/video4.mp4"),
    profilePic:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7039535055194046510~c5_100x100.jpeg?lk3s=a5d48078&nonce=54186&refresh_token=4fb00c136dbf82cbb047e8999463f1bf&x-expires=1731430800&x-signature=uvxHbWhHsnSRxhgml4cDTw2iSeU%3D&shp=a5d48078&shcp=81f88b70",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
];

const url = "https://8c5b-199-212-64-119.ngrok-free.app/updateBoard";

function App() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);
  const scroll = useRef(-96);
  const name = useRef("");
  const [fieldName, setFieldName] = useState("");

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          const playPromise = videoElement.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Play was prevented:", error);
            });
          }
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
        scroll.current += 1;
        console.log("scroll", scroll, name.current);

        if (scroll.current > 0 && scroll.current % 2 === 0) {
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: { name: name.current, scroll: scroll.current },
            }),
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  const updateName = () => {
    name.current = fieldName;
    setVideos([...videoUrls]);
  };

  return (
    <div className="app">
      <div className="container">
        {name.current ? (
          <>
            <TopNavbar className="top-navbar" />
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                username={video.username}
                description={video.description}
                song={video.song}
                likes={video.likes}
                saves={video.saves}
                comments={video.comments}
                shares={video.shares}
                url={video.url}
                profilePic={video.profilePic}
                setVideoRef={handleVideoRef(index)}
                autoplay={index === 0}
              />
            ))}
            <BottomNavbar className="bottom-navbar" />
          </>
        ) : (
          <div>
            <h1 className="input-heading">Enter your name</h1>
            <input
              type="text"
              className="input-field"
              onChange={(e) => setFieldName(e.target.value)}
            />
            <button
              className="submit-button"
              onClick={() => {
                name.current = fieldName;
                updateName();
              }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
