import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mauricioyansen.png",
      name: "Mauricio Yansen",
      role: "Web developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "mauricio.design/doctorcare",
      },
    ],
    publishedAt: new Date("2025-03-11 15:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://picsum.photos/100/100",
      name: "Random",
      role: "Random Images",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "mauricio.design/doctorcare",
      },
    ],
    publishedAt: new Date("2025-03-01 15:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
