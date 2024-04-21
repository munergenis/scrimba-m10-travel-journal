import locationIcon from "../assets/location-icon.png"

export default function Card({
  imageUrl,
  location,
  googleMapsUrl,
  title,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="px-10 mt-4 text-xs">
      <div className="flex items-center gap-x-4 pb-4 border-b-2">
        <img
          className="object-cover w-28 h-40 rounded-md"
          src={imageUrl}
          alt={`${title} image`}
        />
        <div className="flex-1">
          <div className="flex items-center">
            <img className="w-2" src={locationIcon} alt="Location Icon" />
            <p className="ml-1 tracking-widest uppercase">{location}</p>
            <a className="ml-4 text-gray-400 underline" href={googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-3 font-bold">
            {startDate} - {endDate}
          </p>
          <p className="mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}
