<div id="bshadow" class="clearfix">

  
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    <?php if ($main_menu): ?>
      <a href="#navigation" class="element-invisible element-focusable"><?php print t('Skip to navigation'); ?></a>
    <?php endif; ?>
  </div>

  
  <header id="header" role="banner" class="clearfix">

    <nav id="navigation" role="navigation" class="clearfix">
      <div id="header-menu-back"></div>
      
      <div id="logo-block">
        <a href="<?php print $front_page; ?>" title="<?php print t('Dom Moej Mechty Home'); ?>" id="logo">
          <img src="<?php //print '/sites/all/themes/dmm/css/images/dmm-logo.png'; ?>" alt="<?php print t('Дом Моей Мечты'); ?>" title="<?php print t('Dom Moej Mechty Home'); ?>" />
        </a>
        <div class="descr">
          <div class="title">Dom Moej Mechty</div>
          <div class="subtitle">Follow Your Dreams</div>
        </div>
      </div>
      
      <?php echo '<div id="block-dmm-blocks-header-links"><div class="follow-us">Follow Us</div>', dmm_blocks_get_headerLinks(), '</div>', 
              '<div class="user-header">', dmm_user_userBlock(), '</div>',
              render($page['header']); ?>
    </nav>

    <?php ////if ($breadcrumb): print $breadcrumb; endif;?>
  </header> 

  
  <?php if ($page['highlighted']): ?>
    <section id="highlighted" class="clearfix">
      <?php print render($page['highlighted']); ?>
    </section>
  <?php endif; ?>
  
  
  <div id="all-content" class="clearfix">
      
      
      <section id="main" role="main" class="clearfix">

          <?php print $messages; ?>
          <a id="main-content"></a>
          
          <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper clearfix"><?php print render($tabs); ?></div><?php endif; ?>
          <?php print render($page['help']); ?>
          <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
          
          <?php print render($page['above_content']); ?>
          <?php print render($page['content']); ?>
          
      </section> <!-- /#main -->


      <?php if ($page['sidebar_first']): ?>
        <aside id="sidebar-first" role="complementary" class="sidebar clearfix">
          <?php print render($page['sidebar_first']); ?>
        </aside>  <!-- /#sidebar-first -->
      <?php endif; ?>

      <?php if ($page['sidebar_second']): ?>
        <aside id="sidebar-second" role="complementary" class="sidebar clearfix">
          <?php print render($page['sidebar_second']); ?>
        </aside>  <!-- /#sidebar-second -->
      <?php endif; ?>

  </div> <!-- /#all-content -->
  
</div> <!-- /#container -->  
  
  <footer id="footer" role="contentinfo" class="clearfix">
    <?php echo render($page['footer']); ?>
    <div class="c">© 2012 Dom Moej Mechty | All Rights Reserved</div>
  </footer>
  
