export class userClass{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number;
      geo: {
        lat: string;
        lng: string
      }
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string
    }
    constructor(){
        this.id=0,
        this.name='',
        this.username='',
        this.email='',
        this.address={
            street: '',
            suite: '',
            city: '',
            zipcode: 0,
            geo: {
               lat: '',
               lng: '',
             }
        }
        this.phone= '',
        this.website= '',
        this.company= {
          name: '',
          catchPhrase: '',
          bs: ''
        }

    }
}