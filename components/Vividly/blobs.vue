<template>
    <div class="gooey"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: content-box;
}

.gooey {
    background-image: linear-gradient(120deg, #2c2c2c 0%, #2c2c2c 100%);
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    width: 240px;
    height: 244px;
    animation: morph 3s linear infinite;
    transform-style: preserve-3d;
    outline: 1px solid transparent;
    will-change: border-radius;
}
.gooey:before,
.gooey:after {
    content: "";
    width: 240px;
    height: 244px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    will-change: border-radius, transform, opacity;
    animation-delay: 200ms;
    background-image: linear-gradient(120deg, #2c2c2c, #2c2c2c);
}

.gooey:before {
    animation: morph 3s linear infinite;
    opacity: 0.21;
    animation-duration: 1.5s;
}

.gooey:after {
    animation: morph 3s linear infinite;
    animation-delay: 400ms;
    opacity: 0.89;
    content: "Adgroup";
    color: rgba(255, 255, 255, 0.116);
    line-height: 120px;
    text-indent: -21px;
}
.gooey:hover {
    transform: scaleX(1.3);
}

@keyframes morph {
    0%,
    100% {
        border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
        transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
        border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
        transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }
    50% {
        opacity: 0.89;
        transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    67% {
        border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
        transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
}

@keyframes fadeIn {
    100% {
        transform: scale(1.03);
        opacity: 0;
    }
}
</style>