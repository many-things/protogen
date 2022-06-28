import axios from "axios"
import YAML from 'yaml'

const EXAMPLE_GATEWAY_URL = 'https://osmosis.stakesystems.io'
const EXAMPLE_SWAGGER_FILE_URL = `${EXAMPLE_GATEWAY_URL}/swagger/swagger.yaml`

const main = async () => {
  const { data } = await axios.get(EXAMPLE_SWAGGER_FILE_URL)
  const swagger = YAML.parse(data)
}
main()
