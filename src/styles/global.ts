import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  appBar: {
    backgroundColor: colors.primary,
  },
  logo : {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
  searchBar: {
    height: 50,
    margin: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.secondary,
    borderRadius: 25,
    elevation: 3,
  },
  searchContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 5,
  },
  searchInput: {
    flex: 1, 
    height: 40,
    fontSize: 16,
  },
  searchContainerTop: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 10,
    elevation: 5,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
  },
  searchWrapper: {
    flex: 1,
  },
  searchLogo: {
    width: 70,
    height: 70,
    marginRight: 0,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
    paddingHorizontal: 10,
    zIndex: 2,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  filterContainerFloating: {
    position: "absolute",
    top: 80,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor: "rgba(255, 255, 255, 0.9)",
    //borderRadius: 20,
    //paddingVertical: 5,
    //paddingHorizontal: 10,
    //elevation: 5,
    zIndex: 2,
  },
  filterButton: {
    marginHorizontal: 5,
    backgroundColor: colors.primary,
  },
  fabLocation: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    elevation: 5,
    zIndex: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  blueDot: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(0, 122, 255, 0.2)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 122, 255, 0.5)",
  },
  
  innerBlueDot: {
    width: 12,
    height: 12,
    backgroundColor: "#007AFF",
    borderRadius: 6,
  },
  navItem: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  
  navText: {
    fontSize: 10,
    color: "white",
    position: "absolute",
    bottom: -5,
  },
  
  
});