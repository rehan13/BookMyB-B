import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import axios from "axios";


export default function PlacesPage() {
    const[places, setPlaces] = useState([])
    useEffect(() =>{
        axios.get('/user-places').then(({data})=>{
            setPlaces(data)
        })
    })
    return (
        <div>
            <AccountNav />
            
                <div className="text-center">
                    <Link className="inline-flex gap-2 bg-primary text-white py-2 px-4 rounded-full" to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                        </svg>
                        Add New Place
                    </Link>
                </div>
                <div className="mt-4">
                    {places.length > 0 && places.map(place => (
                        <Link to={'/account/places/'+place._id} className=" flex curson-pointer mb-4 gap-4 bg-gray-200 p-4 rounded-2xl">
                            <div className='flex w-32 h-32 bg-gray-300 grow shrink-0'>
                                {place.photos.length > 0 && (
                                    <img className="object-cover aspect-square rounded-xl" src={'http://localhost:4000/uploads/'+place.photos[0]} alt = ""/>
                                )}
                            </div>
                            <div className="grow-0 shrink">
                            <h2 className="text-xl">{place.title}</h2>
                            <p className="text-sm mt-2">{place.description}</p>
                            </div>
                        </Link>

                    ))}
                </div>
            
        </div>
    );
}
