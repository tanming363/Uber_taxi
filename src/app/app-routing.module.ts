import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { LicenseComponent } from './user/license/license.component';
import { VehiclesComponent } from './user/vehicles/vehicles.component';
import { WithdrawalComponent } from './user/withdrawal/withdrawal.component';
import { DocumentsComponent } from './user/documents/documents.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RevenueHistoryComponent } from './user/revenue-history/revenue-history.component';
import { InvoiceListComponent } from './user/invoice-list/invoice-list.component';
import { AddInvoiceComponent } from './user/add-invoice/add-invoice.component';
import { PartnerComponent } from './user/partner/partner.component';
import { DownloadComponent } from './user/download/download.component';

import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'userProfile',
    component: UserComponent,
    children: [
      { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard] },
      { path: 'license', component: LicenseComponent },
      { path: 'vehicle', component: VehiclesComponent },
      { path: 'withdrawal', component: WithdrawalComponent },
      { path: 'document', component: DocumentsComponent },
      { path: 'revenue', component: RevenueHistoryComponent },
      { path: 'invoice-list', component: InvoiceListComponent },
      { path: 'add-invoice', component: AddInvoiceComponent },
      { path: 'parterns', component: PartnerComponent },
      { path: 'download', component: DownloadComponent },
    ]
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DownloadComponent, PartnerComponent, AddInvoiceComponent, InvoiceListComponent, RevenueHistoryComponent, DocumentsComponent, PageNotFoundComponent, UserComponent, SignUpComponent, SignInComponent, ProfileComponent, LicenseComponent, VehiclesComponent, WithdrawalComponent, DocumentsComponent]