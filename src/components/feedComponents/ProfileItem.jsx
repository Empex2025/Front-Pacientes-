import 

const ProfileItem = ({ name, specialism, image }) => (
  <View style={styles.itemContainer}>
    <View style={styles.profileInfo}>
      <Image source={{ uri: image }} style={styles.profileImage} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.profileName}>{name}</Text>
          <Image
            source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-verified-badge-3788755-3165319.png' }}
            style={styles.verifiedIcon}
          />
        </View>
        <Text style={styles.profileSpecialism}>{specialism}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.followButton}>
      <Text style={styles.followButtonText}>Seguir</Text>
    </TouchableOpacity>
  </View>
);