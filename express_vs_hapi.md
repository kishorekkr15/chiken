# ===========================================================================================================

# express
app.use(cors());
app.use(bodyParser.json({ limit: "1024mb" }));
app.use(bodyParser.urlencoded({ limit: "1024mb", extended: true }));

# hapi
const server = Hapi.server({
  port: config.app.port,
  query: {
    parser: (query) => Qs.parse(query),
  },
  routes: {
    cors: true,
  },
});

# ===========================================================================================================
