import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael Ramos"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum impedit harum obcaecati, repellendus ducimus quaerat modi, aperiam maiores assumenda ullam molestiae, sunt maxime commodi explicabo soluta iste provident est."
          />
          <Post
            author="Rafael Ramos"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum impedit harum obcaecati, repellendus ducimus quaerat modi, aperiam maiores assumenda ullam molestiae, sunt maxime commodi explicabo soluta iste provident est."
          />
        </main>
      </div>


    </div>
  )
}

