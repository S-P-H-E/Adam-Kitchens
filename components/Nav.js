import {BsTwitter} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';


export default function Nav({name}){
  const Link1 = "https://twitter.com/AdamKitchens"
  const Link2 = "https://mailchi.mp/6160590472d6/weekly-email-sign-up"
  return(
    <>
      <div className="p-5 flex justify-between items-center">
        <h1>{name}</h1>
        <div>
          <div className="justify-center items-center hidden sm:flex">
              <div onClick={() => {event.preventDefault();window.open(`${Link1}`, "_blank");}}>
                  <button className="mx-4">Twitter</button>
              </div>
                  <p className="cursor-default">/</p>
              <div onClick={() => {event.preventDefault();window.open(`${Link2}`, "_blank");}}>
                  <button className="mx-4">Email</button>
              </div>
          </div>

          <div className='flex justify-center items-center sm:hidden'>
            <div onClick={() => {event.preventDefault();window.open(`${Link1}`, "_blank");}}>
                <BsTwitter className='mx-2'/>
            </div>
            
            <div onClick={() => {event.preventDefault();window.open(`${Link2}`, "_blank");}}>
                <MdEmail className='mx-2'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}