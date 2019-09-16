import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { StrategyComponent } from './strategy/strategy.component';
import { QuantComponent } from './quant/quant.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {PortfolioCardComponent} from './portfolio/portfolioCard.component';
import { OurworkComponent } from './ourwork/ourwork.component';


@NgModule({
  declarations: [ StrategyComponent, QuantComponent, PortfolioComponent, PortfolioCardComponent, OurworkComponent ],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
