switch (breed) {
	case "Small":
		if(age_months<2)
		{
			wtr_lower = 0.23*0.8
			wtr_higher = 0.23*1.2
		}

		else if(age_months<4)
		{
			wtr_lower = 1.36*0.8
			wtr_higher = 1.36*1.2
		}

		else if(age_months<6)
		{
			wtr_lower = 4.08*0.8
			wtr_higher = 4.08*1.2
		}

		else if(age_months<8)
		{
			wtr_lower = 5.9*0.8
			wtr_higher = 5.9*1.2	
		}

		else if(age_months<10)
		{
			wtr_lower = 6.8*0.8
			wtr_higher = 6.8*1.2
		}

		else if(age_months<12)
		{
			wtr_lower = 7.71*0.8
			wtr_higher = 7.71*1.2
		}

		else
		{
			wtr_lower = 7.71*0.8
			wtr_higher = 7.71*1.2			
		}
		break;

	case("Medium"):
		if(age_months<2)
			{
				wtr_lower = 0.28*0.8
				wtr_higher = 0.28*1.2
			}

			else if(age_months<4)
			{
				wtr_lower = 3.17*0.8
				wtr_higher = 3.17*1.2
			}

			else if(age_months<6)
			{
				wtr_lower = 9.52*0.8
				wtr_higher = 9.52*1.2
			}

			else if(age_months<8)
			{
				wtr_lower = 13.6*0.8
				wtr_higher = 13.6*1.2	
			}

			else if(age_months<10)
			{
				wtr_lower = 15.87*0.8
				wtr_higher = 15.87*1.2
			}

			else if(age_months<12)
			{
				wtr_lower = 17.24*0.8
				wtr_higher = 17.24*1.2
			}

			else
			{
				wtr_lower = 17.24*0.8
				wtr_higher = 17.24*1.2			
			}
			break;

	case("Large"):
		if(age_months<2)
			{
				wtr_lower = 0.45*0.8
				wtr_higher = 0.45*1.2
			}

			else if(age_months<4)
			{
				wtr_lower = 8.16*0.8
				wtr_higher = 8.16*1.2
			}

			else if(age_months<6)
			{
				wtr_lower = 17.24*0.8
				wtr_higher = 17.24*1.2
			}

			else if(age_months<8)
			{
				wtr_lower = 24.95*0.8
				wtr_higher = 24.95*1.2	
			}

			else if(age_months<10)
			{
				wtr_lower = 28.12*0.8
				wtr_higher = 28.12*1.2
			}

			else if(age_months<12)
			{
				wtr_lower = 31.75*0.8
				wtr_higher = 31.75*1.2
			}

			else
			{
				wtr_lower = 31.75*0.8
				wtr_higher = 31.75*1.2			
			}
			break;

	case("Giant")
		if(age_months<2)
			{
				wtr_lower = 0.68*0.8
				wtr_higher = 0.68*1.2
			}

			else if(age_months<4)
			{
				wtr_lower = 9.98*0.8
				wtr_higher = 9.98*1.2
			}

			else if(age_months<6)
			{
				wtr_lower = 24.95*0.8
				wtr_higher = 24.95*1.2
			}

			else if(age_months<8)
			{
				wtr_lower = 38.55*0.8
				wtr_higher = 38.55*1.2	
			}

			else if(age_months<10)
			{
				wtr_lower = 45.36*0.8
				wtr_higher = 45.36*1.2
			}

			else if(age_months<12)
			{
				wtr_lower = 58.97*0.8
				wtr_higher = 58.97*1.2
			}

			else
			{
				wtr_lower = 58.97*0.8
				wtr_higher = 58.97*1.2			
			}
			break;
}