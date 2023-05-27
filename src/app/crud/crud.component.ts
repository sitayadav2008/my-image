import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData ,doc , updateDoc, deleteDoc, DocumentReference} from '@angular/fire/firestore';

interface UserData {
  id?: string;
  name: string;
  email: string;
  password: string;
}




@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
[x: string]: any;//dynamic properties added to it later in the code

  userData: any[] = [];

  constructor(private firestore: Firestore) { }


  addData(fsubmit: any) {



    const collectionInstance = collection(this.firestore, 'users'); //user collection in the firestoreDB using collection()

    const formData = fsubmit.value;//gets the form data submitted by the user
  
    const namePattern = /^[a-zA-Z ]{2,30}$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

   
    if (!formData.name || !namePattern.test(formData.name)) {
      alert('Invalid name');
      return;
    }
  
    if (!formData.email || !emailPattern.test(formData.email)) {
      alert('Invalid email');
      return;
    }
  
    addDoc(collectionInstance, formData)
      .then(() => {
        alert('Data Added');
        this.userData.push(formData);
        fsubmit.reset();//resets the form ''
      })
      .catch((err) => {
        console.log(err);
      });
  }












  editData(id: string, user: UserData) {
    const editDataRef = doc(this.firestore, 'users', id);//retrieves a data specified user id
    const updatedUserData: UserData  = {
      name: user.name,
      email: user.email,
      password: user.password
    }; 
  const namePattern = /^[a-zA-Z ]{2,30}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  

  if (!updatedUserData.name || !namePattern.test(updatedUserData.name)) {
    alert('Invalid name');
    return;
  }

  if (!updatedUserData.email || !emailPattern.test(updatedUserData.email)) {
    alert('Invalid email');
    return;
  }
    
    
    
    
    
    
    //creates a new object  with the user data that was passed into the function.
    updateDoc(editDataRef, updatedUserData as { [x: string]: any; })
      .then(() => {
        alert('Data Updated');
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }





deleteData(id:string)
{
  const editDataRef = doc(this.firestore, 'users', id);

  deleteDoc(editDataRef)
  .then(()=>{
    console.log('data deleted')
  } )

}





  ngOnInit() {

    //get previous data from data base//read data
    const collectionInstance = collection(this.firestore, 'users' );
    
    collectionData(collectionInstance, {idField : 'id'}).subscribe((data: any) => {
      this.userData = data;
    });
  }

}
