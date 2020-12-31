import { gql } from '@apollo/client';

export const categories = gql`
	query getCategory {
		Categories(orderBy: { field: "name", order: ASC }, first: 7, page: 1) {
			data {
				id
				name
			}
		}
	}
`;

export const provinces = gql`
	query getProvinces {
		Provinces {
			id
			name
		}
	}
`;

export const merchant = gql`
	query getMerchant($page: Int!, $category: Mixed, $province: Mixed) {
		Merchants(
			orderBy: { field: "name", order: ASC }
			onlyAlphabet: true
			first: 39
			hasCategories: { value: $category }
			hasProvinces: { value: $province }
			page: $page
		) {
			data {
				id
				name
				provinces {
					id
					name
				}
				categories {
					id
					name
				}
			}
		}
	}
`;
