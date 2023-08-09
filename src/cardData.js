import {IoMdWallet} from 'react-icons/io'
import {IoIosCreate} from 'react-icons/io'
import {BsFillCloudUploadFill} from 'react-icons/bs'
import {BsCart4} from 'react-icons/bs'

const data = [
    {
        id: 1,
        title:'Set up Your Wallet',
        description: "Secure your digital treasures with our wallet setup card – your key to entering the vibrant world of NFTs. Begin collecting now!",
        word : "Open Wallet >",
        icon : <IoMdWallet/>
    },
    {
        id : 2,
        icon : <IoIosCreate/>,
        title : "Create Your Artwork",
        description : "Unleash your creativity and mint your masterpiece as an NFT – a chance to transform art into digital legacy!",
        word :"Create Artwork >"
    },
    {
        id :3 ,
        title : "Upload Your Artwork",
        description : "Share your artistic brilliance by uploading your creation and turning it into a remarkable NFT masterpiece for the world.",
        word : "Upload Artwork >",
        icon : <BsFillCloudUploadFill/>
    },
    {
        id : 4,
        title : "Sell Your NFTs",
        description : "Monetize your talent effortlessly by showcasing and selling your NFTs, opening the door to a new world of digital art commerce and appreciation.",
        word:"Sell NFTs > ",
        icon : <BsCart4/>
    }
]

export default data