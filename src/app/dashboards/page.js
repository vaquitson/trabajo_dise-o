const Dashboards = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboards</h1>
      <iframe
        style={{
          width: "100%",
          height: "90vh",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
        src="https://charts.mongodb.com/charts-proyecto_diseno-skvznyt/embed/dashboards?id=6757707b-adfe-4573-851c-8c092f552d5f&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=true&scalingWidth=fixed&scalingHeight=fixed"
        title="MongoDB Dashboard"
      ></iframe>
    </div>
  );
};

export default Dashboards;
