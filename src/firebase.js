import { initializeApp } from 'firebase/app'
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
    apiKey: 'AIzaSyCi2hx96aOWzXh7pwzDPkH5aHRS7nVIRLU',
    authDomain: 'swausays.firebaseapp.com',
    projectId: 'swausays',
    storageBucket: 'swausays.appspot.com',
    messagingSenderId: '415541910578',
    appId: '1:415541910578:web:e31a12bb4c1d4ff9e7b02b',
    measurementId: 'G-JESQKCJ080'
}

const firebaseApp = initializeApp(firebaseConfig)

const db = firebaseApp.firebaseApp.firestore()
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')

export const createUser = (user) => {
    return usersCollection.add(user)
}

export const getUser = async (id) => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = (id) => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot((snapshot) => {
        users.value = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
    })
    onUnmounted(close)
    return users
}

export const createPost = (post) => {
    return postsCollection.add(post)
}

export const getPost = async (id) => {
    const post = await postsCollection.doc(id).get()
    return post.exists ? post.data() : null
}

export const updatePost = (id, post) => {
    return postsCollection.doc(id).update(post)
}

export const deletePost = (id) => {
    return postsCollection.doc(id).delete()
}

export const useLoadPosts = () => {
    const posts = ref([])
    const close = postsCollection.onSnapshot((snapshot) => {
        posts.value = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
    })
    onUnmounted(close)
    return posts
}
