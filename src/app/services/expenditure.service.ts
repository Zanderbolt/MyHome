import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ExpenditureI } from '../models/expenditure.interface'
@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {
  private expendituresCollection: AngularFirestoreCollection<ExpenditureI>;
  private expenditures: Observable<ExpenditureI[]>;

  constructor(db: AngularFirestore) { 
    this.expendituresCollection = db.collection<ExpenditureI>('expenditures');
    this.expenditures = this.expendituresCollection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data };
          });
        }
      )
    )
  }

  getExpenditures() {
    return this.expenditures;
  }

  getExpenditure(id: string) {
    return this.expendituresCollection.doc<ExpenditureI>(id).valueChanges();
  }

  updateExpenditure(expenditure: ExpenditureI, id: string) {
    return this.expendituresCollection.doc(id).update(expenditure);
  }

  addExpenditure(expenditure: ExpenditureI) {
    return this.expendituresCollection.add(expenditure);
  }

  removeExpenditure(id: string){
    return this.expendituresCollection.doc(id).delete();
  }
}
