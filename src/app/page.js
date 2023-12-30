import styles from './page.module.css'
import HisabInput from "@/Component/Hisabadd";
import Todoadd from "@/Component/todoadd";

export default function Home() {
    return (
    <main >
      <HisabInput where="office" name="অফিস নেওয়া" />
        <HisabInput where="work" name="আগের জমা" />
        <p style={{textAlign:"center",
            fontSize:"1.5em",
            marginTop:"10px"
        }}>ADD</p>
        <Todoadd />
    </main>
  )
}
