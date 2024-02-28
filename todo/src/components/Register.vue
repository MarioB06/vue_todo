<template>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { saveUserData, checkUserExists } from '../utils/userData';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const submitForm = () => {
    const userData = {
        email: email.value,
        password: password.value
    };

    if (checkUserExists(userData.email)) {
        // E-Mail bereits vergeben, zeige eine entsprechende Fehlermeldung an
        console.log('E-Mail bereits vergeben');
    } else {
        // E-Mail ist noch nicht vergeben, neuen Benutzer registrieren
        saveUserData(userData);
        // Weiterleitung zur Home-Seite nach erfolgreicher Registrierung
        router.push('/home');
    }
};
</script>
