<template>
<div id="no-app">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">

            <inertia-link class="navbar-brand" href="/">Samba</inertia-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>
                <button @click="logout" class="btn btn-outline-danger btn-round">logout</button>
            </div>
        </div>
    </nav>

    <main class="py-4">
        <slot />
    </main>

</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AppLayout',
    methods: {
        logout() {
            axios.post('/logout').then(response => {
                window.location = '/';
            })
        }
    }
}
</script>
