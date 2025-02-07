# ===========================================================================================================

# initialize object in typescript

interface params_obj {
  id?: string
  reference?: string
  reference_id?: string
}

let param_obj: params_obj = {}

# ===========================================================================================================

  const { name } = useParams<{ name: string }>()
