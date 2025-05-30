import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { globalStyles } from "../styles/global";

const MapComponent = ({ mapRef, location, filter }) => {
  //const mapRef = useRef(null);
  const [recyclingPoints, setRecyclingPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [address, setAddress] = useState("");
  const [loadingAddress, setLoadingAddress] = useState(false);

<<<<<<< HEAD
=======
  /** Récupère les points de recyclage depuis Overpass API */
>>>>>>> c95afc6d013d9e43c6593487d1478fb576db87ba
  const fetchRecyclingPoints = async () => {
    if (!location) return;

    const { latitude, longitude } = location;
    const delta = 0.05;
    const tagFilter = filter ? `["recycling:${filter}"="yes"]` : "";

    const overpassQuery = `
      [out:json];
      node["amenity"="recycling"]${tagFilter}(${latitude - delta},${longitude - delta},${latitude + delta},${longitude + delta});
      out;
    `;

    try {
      const response = await fetch("https://overpass.kumi.systems/api/interpreter", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `data=${encodeURIComponent(overpassQuery)}`,
      });
      const data = await response.json();

      if (data.elements) {
        setRecyclingPoints(data.elements.map(el => ({
          id: el.id,
          latitude: el.lat,
          longitude: el.lon,
          tags: el.tags,
        })));
      }
    } catch (error) {
      console.error("Erreur récupération des points :", error);
    }
  };

  /** Formate l'adresse pour n'afficher que le numéro, la rue, le code postal et la ville */
  const formatAddress = (data) => {
    if (!data || !data.address) return "Adresse non trouvée";
    
    const { house_number, road, postcode, town, city } = data.address;
    return `${house_number ? house_number + " " : ""}${road || ""}, ${postcode || ""} ${town || city || ""}`;
  };

  /**Récupère l'adresse via Nominatim */
  const fetchAddressFromCoordinates = async (latitude, longitude) => {
    setLoadingAddress(true);
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;
      const response = await fetch(url, {
        headers: { "User-Agent": "RecycleFinder/1.0 (zineblahmar1@gmail.com)" },
      });
      const data = await response.json();

      setAddress(formatAddress(data));
    } catch (error) {
      console.error("Erreur lors de la récupération de l'adresse :", error);
      setAddress("Adresse non trouvée");
    }
    setLoadingAddress(false);
  };

  /**Sélectionne un point de recyclage et récupère son adresse */
  const handleSelectPoint = (point) => {
    setSelectedPoint(point);
    fetchAddressFromCoordinates(point.latitude, point.longitude);

    mapRef.current?.animateToRegion({
      latitude: point.latitude,
      longitude: point.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  };

  /**Récupère les points de recyclage à chaque changement de location ou filtre */
  useEffect(() => {
    fetchRecyclingPoints();
  }, [location, filter]);

  /**Centre la carte sur la position actuelle */
  useEffect(() => {
    if (location && mapRef.current) {
      console.log("Mise à jour automatique de la carte vers la position actuelle");
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [location]);
  

  /**Détermine l'icône du point de recyclage */
  const getRecyclingIcon = (tags) => {
    if (tags["recycling:glass_bottles"] === "yes") return "glass-fragile";
    if (tags["recycling:plastic"] === "yes") return "recycle";
    if (tags["recycling:paper"] === "yes") return "file-document-outline";
    if (tags["recycling:scrap_metal"] === "yes") return "silverware-fork-knife";
    if (tags["recycling:organic"] === "yes") return "leaf";
    if (tags["recycling:electronics"] === "yes") return "battery";
    if (tags["recycling:textile"] === "yes") return "tshirt-crew";
    return "recycle";
  };
  
  return (
    <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map} provider={PROVIDER_GOOGLE}
        region={{
          latitude: location?.latitude || 48.8566,
          longitude: location?.longitude || 2.3522,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        {location && (
          <Marker coordinate={location} title="Ma Position" description="Vous êtes ici">
            <View style={globalStyles.blueDot}>
              <View style={globalStyles.innerBlueDot} />
            </View>
          </Marker>
        )}
        {recyclingPoints.map(point => (
          <Marker
          key={point.id}
          coordinate={{ latitude: point.latitude, longitude: point.longitude }}
          onPress={() => handleSelectPoint(point)}
          pinColor={selectedPoint?.id === point.id ? colors.secondary : colors.secondary}
        />
        ))}
      </MapView>

      {selectedPoint && (
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons name="recycle" size={40} color={colors.primary} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>Type : {Object.keys(selectedPoint.tags).filter(tag => tag.startsWith("recycling:")).join(", ")}</Text>
            <Text style={styles.infoText}>Adresse : {loadingAddress ? <ActivityIndicator size="small" /> : address}</Text>
          </View>
          <TouchableOpacity onPress={() => setSelectedPoint(null)} style={styles.closeButton}>
            <MaterialCommunityIcons name="close" size={30} color="#FF5733" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  infoContainer: {
    position: "absolute",
    bottom: 70,
    left: 20,
    right: 70,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  infoTextContainer: { flex: 1, marginLeft: 10 },
  infoText: { fontSize: 16, fontWeight: "bold", textAlign: "left", marginTop: 5 },
  closeButton: { position: "absolute", top: 5, right: 5 },
});

export default MapComponent;