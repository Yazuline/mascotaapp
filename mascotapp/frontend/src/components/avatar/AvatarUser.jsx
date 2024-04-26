import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import { AuthContext } from "../../auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function AvatarProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userId = localStorage.getItem("userId");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    localStorage.removeItem("userId");
    navigate("/inicio", {
      replace: true,
    });
  };
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex">
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <span className="text-end text-sm sm:text-[1rem]">
          Bienvenido, {user?.nombre}
        </span>
      </Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            src={
              user?.role === "cliente" ? "/user-profile.webp" 
              : user?.role === "cuidador" ? "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              : "https://cdn.vectorstock.com/i/preview-1x/61/33/admin-administrator-panel-web-icon-vector-40886133.jpg"}
          />
        </StyledBadge>
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 24,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          {/* Perfil del usuario cuidador */}
          {user.role === "cuidador" && (
            <a href={`/perfil/${user._id}`}>
              <div className="flex items-center px-3 gap-2">
                <FaRegUserCircle size="1.3rem" /> <span>Perfil</span>
              </div>
            </a>
          )}

          {/* Perfil del usuario cuidador */}
          {user.role === "cliente" && (
            <a href={`/perfil-dueño/${userId}`}>
              <div className="flex items-center px-3 gap-2">
                <FaRegUserCircle size="1.3rem" /> <span>Perfil</span>
              </div>
            </a>
          )}
        </MenuItem>
        {user.role === "cuidador" && (
          <MenuItem onClick={handleClose}>
            {/* Perfil del usuario */}
            <a href={`/nuevas-reservas/${user._id}`}>
              <div className="flex items-center px-3 gap-2">
                <BiMessageRoundedDetail size="1.3rem" /> <span>Reservas</span>
              </div>
            </a>
          </MenuItem>
        )}
        {user.role === "cliente" && (
          <MenuItem onClick={handleClose}>
            {/* Perfil del usuario */}
            <a href={`/reservas/${user._id}`}>
              <div className="flex items-center px-3 gap-2">
                <BiMessageRoundedDetail size="1.3rem" /> <span>Reservas</span>
              </div>
            </a>
          </MenuItem>
        )}

        {user.role === "admin" && (
          <MenuItem onClick={handleClose}>
            {/* Perfil del usuario */}
            <a href={`/dashboard-admin/${user._id}`}>
              <div className="flex items-center px-3 gap-2">
                <MdOutlineDashboard size="1.3rem" /> <span>Dashboard</span>
              </div>
            </a>
          </MenuItem>
        )}

        <Divider />
        {/* Salir usuario */}
        <MenuItem onClick={onLogout}>
          <div className="flex items-center px-3">
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Salir
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
