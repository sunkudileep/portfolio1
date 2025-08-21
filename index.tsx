@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --scrollbar-track: #f1f1f1;
  --scrollbar-thumb: #888;
  --scrollbar-thumb-hover: #555;
}

.dark {
  --scrollbar-track: #2d3748;
  --scrollbar-thumb: #4a5568;
  --scrollbar-thumb-hover: #718096;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out forwards;
}

/* Fade-in-up animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Aspect ratio utilities */
.aspect-w-4 {
  position: relative;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
  --tw-aspect-w: 4;
}

.aspect-h-5 {
  --tw-aspect-h: 5;
}

.aspect-w-4 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}