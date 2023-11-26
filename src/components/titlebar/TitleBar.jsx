import React, { useState, useEffect } from 'react';
import { menu } from './menu';
import Icon from '../../assets/icons/32x32.png';
import { appWindow } from '@tauri-apps/api/window';
import { FaWindowMinimize } from 'react-icons/fa6';
import { FaRegWindowMaximize } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './titlebar.css';

function TitleBar() {
  const [isMaximized, setIsMaximized] = useState('false');
  const [clicked, setClicked] = useState('false');

  function getMenuItem(m, level) {
    if (m == null || m.length == 0) return null;

    return (
      <>
        {m.map((item) => {
          return (
            <div
              className={'menuItem-' + `${level}`}
              aria-selected={clicked}
              onClick={() => {
                console.log('Clicked');
                setClicked('true');
              }}
            >
              <div className={'menuItemTitle-' + `${level}`}>
                {item.name}
              </div>
              <div className={'subMenuItemContainer-' + `${level}`}>
                {getMenuItem(item.subMenus, level + 1)}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  useEffect(() => {
    if (isMaximized)
      document.getElementById('root').style.borderRadius = '0px';
    else document.getElementById('root').style.borderRadius = '10px';
  }, [isMaximized]);
  return (
    <div
      className="titlebarContainer"
      data-tauri-drag-region
      onDragStart={async () => await appWindow.startDragging()}
    >
      <div className="titlebarLeft">
        <img src={Icon} className="titlebarIcon" alt="" />
        <div
          className="titlebarMenuItems"
          onMouseLeave={() => setClicked('false')}
        >
          {getMenuItem(menu, 0)}
        </div>
      </div>
      <div className="titlebarRight">
        <div
          className="windowControlButton"
          onClick={async () => {
            await appWindow.minimize(true);
          }}
        >
          <FaWindowMinimize />
        </div>
        <div
          className="windowControlButton"
          onClick={async () => {
            setIsMaximized((prev) => !prev);
            await appWindow.toggleMaximize();
          }}
        >
          <FaRegWindowMaximize />
        </div>
        <div
          className="windowControlButton"
          onClick={async () => {
            setIsMaximized((prev) => !prev);
            await appWindow.close(true);
          }}
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
