import React, { useState } from 'react';
import axios from 'axios';

function CreateUserForm() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        fitnessLevel: 'BEGINNER',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:30002/users', form)
            .then(res => {
                console.log('Utilisateur créé :', res.data);
            })
            .catch(err => {
                console.error('Erreur création utilisateur :', err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" value={form.username} onChange={handleChange} placeholder="Nom d'utilisateur" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <select name="fitnessLevel" value={form.fitnessLevel} onChange={handleChange}>
                <option value="BEGINNER">Débutant</option>
                <option value="INTERMEDIATE">Intermédiaire</option>
                <option value="ADVANCED">Avancé</option>
            </select>
            <button type="submit">Créer</button>
        </form>
    );
}

export default CreateUserForm;
