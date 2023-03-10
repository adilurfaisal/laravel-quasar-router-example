<template>
    <div class="q-pa-md" style="max-width: 400px">
        <q-btn :to="{path: '/table'}" label="Table"></q-btn>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
                filled
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                ]"
            />

            <q-input
                filled
                type="number"
                v-model="age"
                label="Your age *"
                lazy-rules
                :rules="[
                    (val) =>
                        (val !== null && val !== '') || 'Please type your age',
                    (val) => (val > 0 && val < 100) || 'Please type a real age',
                ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                />
            </div>
        </q-form>
    </div>
</template>

<script>
import { Notify, Dialog } from "quasar";
import { ref } from "vue";

export default {
    setup() {
        const name = ref(null);
        const age = ref(null);
        const accept = ref(false);

        return {
            name,
            age,
            accept,

            onSubmit() {
                if (accept.value !== true) {
                    Notify.create({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message:
                            "You need to accept the license and terms first",
                    });
                } else {
                    Notify.create({
                        color: "green-4",
                        textColor: "white",
                        icon: "cloud_done",
                        message: "Submitted",
                    });
                }

                Dialog.create({
                    title: "Alert",
                    message: "Some message",
                })
                    .onOk(() => {
                        // console.log('OK')
                    })
                    .onCancel(() => {
                        // console.log('Cancel')
                    })
                    .onDismiss(() => {
                        // console.log('I am triggered on both OK and Cancel')
                    });
            },

            onReset() {
                name.value = null;
                age.value = null;
                accept.value = false;
            },
        };
    },
};
</script>
