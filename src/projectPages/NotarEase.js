import MultiColumn from './../components/multiColumn/MultiColumn'
import ImageGallery from 'react-image-gallery';

function NotarEase() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                NotarEase is the first tool in India where you can notarise a document online.
                <br/><br/>
                I designed the user flow for the web app and closely worked with the founders of NotarEase.
                <br/><br/>
                Check it out <a href="https://notarease.com" target="_blank" rel="noreferrer">here</a>!
            </p>
            <h2>The problem</h2>
            <p>
                Notarisation is a way of authenticating a document by having a notary verify the identity of someone and making sure that they understand the document before they sign it. 
                <br/><br/>
                In India, this process is normally done in person, where all parties and the notary have to be in the same physical space. 
                <br/><br/>
                This causes problems and delays as the different parties could be based far away from each other and they have to travel in just to sign and notarise a document.
            </p>
            <h2>Designing the user experience</h2>
            <p>
                Translating a physical experience to a digital process was a fun challenge. We looked at how notarisation is currently done, broke it down into steps and put everything into one smooth user flow.
                <br/><br/>
                In a physical notarisation meeting, these are the steps that always happen. 
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/ID-card.png"),
                            alt: "ID Icon",
                            filters: ["invert(1)"]
                        },
                        title:"ID check",
                        body:"All parties show their ID card (Aadhaar / Passport)"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Pen.png"),
                            alt: "Pen Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Signature",
                        body:"All parties sign the documents"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Approve.png"),
                            alt: "Approval Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Approval",
                        body:"The notary stamps and signs the document to approve the notarisation"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Book-cropped.png"),
                            alt: "Book Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Register entry",
                        body:"The notary makes an entry in his register, recording important details about the document and signatories"
                    },
                ]}
            />
            <p>
                We translated the applicable steps to their digital equivalent: 
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Digital ID Check.png"),
                            alt: "Digital ID Check Icon",
                            filters: ["invert(1)"]
                        },
                        title:"ID check",
                        body:"All parties hold their ID and show their face to the camera. Screenshots are taken and saved for records"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Electronic Signature.png"),
                            alt: "Electronic Signature Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Electronic signatures",
                        body:"A link is sent to the parties to digitally sign the document using an electronic signature platform"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Digital Approval.png"),
                            alt: "Digital Approval Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Approval",
                        body:"The notary clicks a button to approve the notarisation"
                    },
                ]}
            />
            <p>
                On top of that I designed some auxiliary steps before and after the meeting, such as:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/calendar-cropped.png"),
                            alt: "Caledar Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Scheduling a new meeting",
                        body:"Scheduling, inviting the different parties and uploading the documents to be notarised based on the notary’s available time slots"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Mail.png"),
                            alt: "People Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Confirmation email",
                        body:"Sending a confirmation email to all the parties with the signed document"
                    },
                ]}
            />
            <h2>Conclusion</h2>
            <p>
                Before Notarease notarisation was done in person or illegally (as has been recognised by courts in India as well). 
                <br/><br/>
                NotarEase a the first of it’s kind platform that aims to change this conventional process to bring it online. NotarEase has been accepted by courts in India and is now being used by lawyers, clients and law firms across the country.
                <br/><br/>
                It is extremely satisfying to see my inputs and our work realised and used by real people to improve the efficiency in such a serious and important sector, (the legal sector).
            </p>
        </>
    )
}

export default NotarEase