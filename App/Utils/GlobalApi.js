import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/clv3mdz3z2wjr07wb21yunta8/master"

const getSlider = async () => {
    const query = gql`
        query GetSlider {
            sliders {
                id
                name
                image {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query)
    return result
}

export default { getSlider }