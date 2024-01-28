export default function Show({ when, children, fallback = null }) {
    return when ? children : fallback;
}