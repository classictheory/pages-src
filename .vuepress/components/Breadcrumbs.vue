<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="/">Home</a></li>
            <slot></slot>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            links: {
                type: Array
            }
        }
    }
</script>