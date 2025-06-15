import { useParams } from "react-router-dom";

export default function DetailsPage() {
    const { id } = useParams();

    return (
        <div className="p-10">
            <div
                data-flip-id={id}
                className="bg-blue-700 text-white p-10 rounded-xl text-xl"
            >
                Details of {id}
            </div>
        </div>
    );
}
