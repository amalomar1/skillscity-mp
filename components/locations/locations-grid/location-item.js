import LikeButton from "./like-button";

export default function LocationItem({ location }) {
    return (
        <div className="border rounded-lg p-4">
            <img src={location.imgUrl} className="rounded-lg" />
            <p className="text-xl font-medium text-amber-900">{location.title}</p>
            <p className="text-amber-700">{location.author}</p>
            <LikeButton />
        </div>
    )
}