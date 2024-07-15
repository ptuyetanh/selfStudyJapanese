PGDMP                      |            selfStudyJapanese    16.2    16.2 D               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16438    selfStudyJapanese    DATABASE     �   CREATE DATABASE "selfStudyJapanese" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Vietnamese_Vietnam.1252';
 #   DROP DATABASE "selfStudyJapanese";
                postgres    false                       0    0    DATABASE "selfStudyJapanese"    ACL     �   GRANT ALL ON DATABASE "selfStudyJapanese" TO pg_read_all_settings;
GRANT ALL ON DATABASE "selfStudyJapanese" TO pg_read_all_stats;
                   postgres    false    4886            �            1259    16521    alphabetlessons    TABLE     v   CREATE TABLE public.alphabetlessons (
    lesson_id bigint NOT NULL,
    lesson_name text,
    lesson_example text
);
 #   DROP TABLE public.alphabetlessons;
       public         heap    postgres    false            �            1259    16520    alphabetlessons_lesson_id_seq    SEQUENCE     �   ALTER TABLE public.alphabetlessons ALTER COLUMN lesson_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.alphabetlessons_lesson_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    230            �            1259    16513 	   alphabets    TABLE     �   CREATE TABLE public.alphabets (
    alphabet_id bigint NOT NULL,
    name text,
    pronunciation text,
    example text,
    sound text,
    type text,
    lesson_id bigint
);
    DROP TABLE public.alphabets;
       public         heap    postgres    false            �            1259    16512    alphabets_alphabet_id_seq    SEQUENCE     �   ALTER TABLE public.alphabets ALTER COLUMN alphabet_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.alphabets_alphabet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �            1259    16505    communications    TABLE     >  CREATE TABLE public.communications (
    communication_id bigint NOT NULL,
    lesson_name text,
    sound_shadowing text,
    one_a text,
    one_b text,
    two_a text,
    two_b text,
    three_a text,
    three_b text,
    four_a text,
    four_b text,
    five_a text,
    five_b text,
    mean_shadowing text
);
 "   DROP TABLE public.communications;
       public         heap    postgres    false            �            1259    16504 #   communications_communication_id_seq    SEQUENCE     �   ALTER TABLE public.communications ALTER COLUMN communication_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.communications_communication_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    226            �            1259    16492    grammars    TABLE     �   CREATE TABLE public.grammars (
    grammar_id bigint NOT NULL,
    name text,
    mean text,
    example text,
    mean_example text,
    sound text,
    explain text,
    level_id bigint,
    lesson_name text
);
    DROP TABLE public.grammars;
       public         heap    postgres    false            �            1259    16491    grammars_grammar_id_seq    SEQUENCE     �   ALTER TABLE public.grammars ALTER COLUMN grammar_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.grammars_grammar_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    224            �            1259    16471    levels    TABLE     R   CREATE TABLE public.levels (
    level_id bigint NOT NULL,
    level_name text
);
    DROP TABLE public.levels;
       public         heap    postgres    false            �            1259    16470    levels_level_id_seq    SEQUENCE     �   ALTER TABLE public.levels ALTER COLUMN level_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.levels_level_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            �            1259    16581    reviews    TABLE     �   CREATE TABLE public.reviews (
    review_id bigint NOT NULL,
    vocab_id bigint,
    grammar_id bigint,
    name text,
    mean text,
    review_last timestamp without time zone,
    review_next timestamp without time zone,
    user_id bigint
);
    DROP TABLE public.reviews;
       public         heap    postgres    false            �            1259    16580    reviews_review_id_seq    SEQUENCE     �   ALTER TABLE public.reviews ALTER COLUMN review_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reviews_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    234            �            1259    16448    roles    TABLE     O   CREATE TABLE public.roles (
    role_id bigint NOT NULL,
    role_name text
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    16455    roles_role_id_seq    SEQUENCE     �   ALTER TABLE public.roles ALTER COLUMN role_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.roles_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    16540    signupmembers    TABLE     �   CREATE TABLE public.signupmembers (
    signupmember_id bigint NOT NULL,
    timestudy text,
    paymentphoto text,
    timesignup timestamp without time zone,
    user_id bigint
);
 !   DROP TABLE public.signupmembers;
       public         heap    postgres    false            �            1259    16539 !   signupmembers_signupmember_id_seq    SEQUENCE     �   ALTER TABLE public.signupmembers ALTER COLUMN signupmember_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.signupmembers_signupmember_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    232            �            1259    16439    users    TABLE     �   CREATE TABLE public.users (
    user_id bigint NOT NULL,
    fullname text,
    email text,
    phonenumber bigint,
    dateofbirth date,
    password text,
    role_id bigint DEFAULT 1,
    start_day date,
    expiration_date date
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16456    users_user_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    16462    vocabularies    TABLE     �   CREATE TABLE public.vocabularies (
    vocab_id bigint NOT NULL,
    name text,
    mean text,
    example text,
    sound text,
    sino_vietnamese_sound text,
    pronunciation text,
    example_mean text,
    lesson_name text,
    level_id bigint
);
     DROP TABLE public.vocabularies;
       public         heap    postgres    false            �            1259    16469    vocabularies_vocab_id_seq    SEQUENCE     �   ALTER TABLE public.vocabularies ALTER COLUMN vocab_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.vocabularies_vocab_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219                      0    16521    alphabetlessons 
   TABLE DATA           Q   COPY public.alphabetlessons (lesson_id, lesson_name, lesson_example) FROM stdin;
    public          postgres    false    230   �S       
          0    16513 	   alphabets 
   TABLE DATA           f   COPY public.alphabets (alphabet_id, name, pronunciation, example, sound, type, lesson_id) FROM stdin;
    public          postgres    false    228   �S                 0    16505    communications 
   TABLE DATA           �   COPY public.communications (communication_id, lesson_name, sound_shadowing, one_a, one_b, two_a, two_b, three_a, three_b, four_a, four_b, five_a, five_b, mean_shadowing) FROM stdin;
    public          postgres    false    226   U                 0    16492    grammars 
   TABLE DATA           x   COPY public.grammars (grammar_id, name, mean, example, mean_example, sound, explain, level_id, lesson_name) FROM stdin;
    public          postgres    false    224    W                 0    16471    levels 
   TABLE DATA           6   COPY public.levels (level_id, level_name) FROM stdin;
    public          postgres    false    222   �Z                 0    16581    reviews 
   TABLE DATA           q   COPY public.reviews (review_id, vocab_id, grammar_id, name, mean, review_last, review_next, user_id) FROM stdin;
    public          postgres    false    234   [       �          0    16448    roles 
   TABLE DATA           3   COPY public.roles (role_id, role_name) FROM stdin;
    public          postgres    false    216   !\                 0    16540    signupmembers 
   TABLE DATA           f   COPY public.signupmembers (signupmember_id, timestudy, paymentphoto, timesignup, user_id) FROM stdin;
    public          postgres    false    232   T\       �          0    16439    users 
   TABLE DATA           �   COPY public.users (user_id, fullname, email, phonenumber, dateofbirth, password, role_id, start_day, expiration_date) FROM stdin;
    public          postgres    false    215   q\                 0    16462    vocabularies 
   TABLE DATA           �   COPY public.vocabularies (vocab_id, name, mean, example, sound, sino_vietnamese_sound, pronunciation, example_mean, lesson_name, level_id) FROM stdin;
    public          postgres    false    219   l]                  0    0    alphabetlessons_lesson_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.alphabetlessons_lesson_id_seq', 4, true);
          public          postgres    false    229                       0    0    alphabets_alphabet_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.alphabets_alphabet_id_seq', 305, true);
          public          postgres    false    227                       0    0 #   communications_communication_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public.communications_communication_id_seq', 11, true);
          public          postgres    false    225                       0    0    grammars_grammar_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.grammars_grammar_id_seq', 26, true);
          public          postgres    false    223                       0    0    levels_level_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.levels_level_id_seq', 5, true);
          public          postgres    false    221                       0    0    reviews_review_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.reviews_review_id_seq', 145, true);
          public          postgres    false    233                       0    0    roles_role_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.roles_role_id_seq', 3, true);
          public          postgres    false    217                       0    0 !   signupmembers_signupmember_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.signupmembers_signupmember_id_seq', 38, true);
          public          postgres    false    231                        0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 39, true);
          public          postgres    false    218            !           0    0    vocabularies_vocab_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.vocabularies_vocab_id_seq', 10, true);
          public          postgres    false    220            [           2606    16527 $   alphabetlessons alphabetlessons_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.alphabetlessons
    ADD CONSTRAINT alphabetlessons_pkey PRIMARY KEY (lesson_id);
 N   ALTER TABLE ONLY public.alphabetlessons DROP CONSTRAINT alphabetlessons_pkey;
       public            postgres    false    230            Y           2606    16517    alphabets alphabets_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.alphabets
    ADD CONSTRAINT alphabets_pkey PRIMARY KEY (alphabet_id);
 B   ALTER TABLE ONLY public.alphabets DROP CONSTRAINT alphabets_pkey;
       public            postgres    false    228            W           2606    16509 "   communications communications_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.communications
    ADD CONSTRAINT communications_pkey PRIMARY KEY (communication_id);
 L   ALTER TABLE ONLY public.communications DROP CONSTRAINT communications_pkey;
       public            postgres    false    226            U           2606    16498    grammars grammars_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.grammars
    ADD CONSTRAINT grammars_pkey PRIMARY KEY (grammar_id);
 @   ALTER TABLE ONLY public.grammars DROP CONSTRAINT grammars_pkey;
       public            postgres    false    224            S           2606    16475    levels levels_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.levels
    ADD CONSTRAINT levels_pkey PRIMARY KEY (level_id);
 <   ALTER TABLE ONLY public.levels DROP CONSTRAINT levels_pkey;
       public            postgres    false    222            a           2606    16611    reviews reviews_grammar_id_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_grammar_id_key UNIQUE (grammar_id);
 H   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_grammar_id_key;
       public            postgres    false    234            c           2606    16587    reviews reviews_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (review_id);
 >   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
       public            postgres    false    234            e           2606    16603    reviews reviews_vocab_id_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_vocab_id_key UNIQUE (vocab_id);
 F   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_vocab_id_key;
       public            postgres    false    234            O           2606    16454    roles roles_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    216            ]           2606    16546     signupmembers signupmembers_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.signupmembers
    ADD CONSTRAINT signupmembers_pkey PRIMARY KEY (signupmember_id);
 J   ALTER TABLE ONLY public.signupmembers DROP CONSTRAINT signupmembers_pkey;
       public            postgres    false    232            _           2606    16617 '   signupmembers signupmembers_user_id_key 
   CONSTRAINT     e   ALTER TABLE ONLY public.signupmembers
    ADD CONSTRAINT signupmembers_user_id_key UNIQUE (user_id);
 Q   ALTER TABLE ONLY public.signupmembers DROP CONSTRAINT signupmembers_user_id_key;
       public            postgres    false    232            I           2606    16446    users user_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public            postgres    false    215            K           2606    24727    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            M           2606    24729    users users_phonenumber_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phonenumber_key UNIQUE (phonenumber);
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT users_phonenumber_key;
       public            postgres    false    215            Q           2606    16468    vocabularies vocabularys_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.vocabularies
    ADD CONSTRAINT vocabularys_pkey PRIMARY KEY (vocab_id);
 G   ALTER TABLE ONLY public.vocabularies DROP CONSTRAINT vocabularys_pkey;
       public            postgres    false    219            h           2606    16499    grammars FK_Grammar_level    FK CONSTRAINT     �   ALTER TABLE ONLY public.grammars
    ADD CONSTRAINT "FK_Grammar_level" FOREIGN KEY (level_id) REFERENCES public.levels(level_id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.grammars DROP CONSTRAINT "FK_Grammar_level";
       public          postgres    false    4691    222    224            k           2606    16597    reviews FK_grammarReview    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "FK_grammarReview" FOREIGN KEY (grammar_id) REFERENCES public.grammars(grammar_id) ON UPDATE CASCADE ON DELETE CASCADE;
 D   ALTER TABLE ONLY public.reviews DROP CONSTRAINT "FK_grammarReview";
       public          postgres    false    4693    234    224            i           2606    16528    alphabets FK_lessonAlphabet    FK CONSTRAINT     �   ALTER TABLE ONLY public.alphabets
    ADD CONSTRAINT "FK_lessonAlphabet" FOREIGN KEY (lesson_id) REFERENCES public.alphabetlessons(lesson_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 G   ALTER TABLE ONLY public.alphabets DROP CONSTRAINT "FK_lessonAlphabet";
       public          postgres    false    230    4699    228            f           2606    16457    users FK_role    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_role" FOREIGN KEY (role_id) REFERENCES public.roles(role_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT "FK_role";
       public          postgres    false    215    216    4687            l           2606    16618    reviews FK_userReview    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "FK_userReview" FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 A   ALTER TABLE ONLY public.reviews DROP CONSTRAINT "FK_userReview";
       public          postgres    false    215    234    4681            m           2606    16592    reviews FK_vocabReview    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "FK_vocabReview" FOREIGN KEY (vocab_id) REFERENCES public.vocabularies(vocab_id) ON UPDATE CASCADE ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.reviews DROP CONSTRAINT "FK_vocabReview";
       public          postgres    false    219    234    4689            g           2606    16534    vocabularies Fk_level    FK CONSTRAINT     �   ALTER TABLE ONLY public.vocabularies
    ADD CONSTRAINT "Fk_level" FOREIGN KEY (level_id) REFERENCES public.levels(level_id) NOT VALID;
 A   ALTER TABLE ONLY public.vocabularies DROP CONSTRAINT "Fk_level";
       public          postgres    false    219    222    4691            j           2606    16547    signupmembers Fk_signupmember    FK CONSTRAINT     �   ALTER TABLE ONLY public.signupmembers
    ADD CONSTRAINT "Fk_signupmember" FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.signupmembers DROP CONSTRAINT "Fk_signupmember";
       public          postgres    false    232    215    4681               I   x�3���,JLO�K�|���e��X�6-�2�tz�{�BI����9��h�2��8�0O���O�.����� ��      
   )  x�3�4�|��ę"75j���BS!�؆DΧk�=�2_/����P�=?��4?�Ӑ��҂d�$�ĥ(����� (�	"7vh<]�MS!/�����m�� �q�>���� ��?ܽ��F@��T	��G�ٌϧ��T(���š�(�ř"���I�����N��,�Ů�(�͙rQ���y��A�z6�_3=3Q����k�2ph5��rz�����X;ȶ�T�����3�j441&-\Mp&��-I�&CS�cjHz4�QM����F���	��djJR�����1z\\\ �Ǯ�         �  x�}RMkQ]����TЖ$��UEp�J\u�f^���ީ��JRS)%	I�*%Jҙ��W�?��K����L�؅�L�=��{g�y� �#�=���'�'�pX��Cx@����I[LQ����K���;�h+��_>'��Us��M�.�$r�|z�3�pVS��&9n�z����N��Z�5U�i<�@�^me~l��p�I��0�<����k
W�X��X�'���d�d�b�(^���&9�rL,�{�)�5�E���ϟ�\�3g��q�_4/��+�F���m�D�Y��>�/��+�9�mڞ�3����޻�Ρ���y>�~9��dd�,=$|m��GY"~�?Gt���y6�Za���H6�/W�n���I>78��j�G!�X��N�&�I
�֬�������r��,��8������oE�P2�f�}O֘d´���*rrq��@U�B�L�҃�ro b���7at;�&=x�|gդ��][p]��E��         �  x��UMoW]?����Jl�T o ��8��i�Ax籃��$B)�8cB�6��g�?F��/��7�	��R�h����8���nƄ��]�0����TeQ8�Q�Y٠�Al<Q�N��w�}Ht�?Q��!��
�z�,e�:a���oyF���0�i!�M�'GE���h�.M�aPu�	1F����ޖS�QuҤ������u�"���������Ҧ^-�R�E8��JL�m
�fI�1��4�m��ũ�Sb̠�r�+(�x�ĳ�?xT�+�ɔO�+�x2����G��a�VD�l �u+�[
��G#�H�I��,��xl�.��@�\��x�l|�1J̄����dĩ0x@�.��]��Y��,�p
�wUUj����1���cz�u�4�᭒�q@�%�*�M����N�4:���a�>���{:�&ة��>���h9Wnۘ�S�I9��prn�)�9��q�u�7�-���ـX����pD�w��^�������h߳bu�����;U}I�~����%7V4j�'�ۦ��1_��t�*/���p�43"(c��P�|�I�xd�`�9dB6YD2Y�mNqՠ��+���CA\�8�l�� �Y�όޠ�nM���oP��w��_J�5�Gs^��6zН�2SQ�{QmY�w`�|,��`���(��DO�LU*��oF��tr�.@���|'.�{���{ί�Cg� _d�&3���2�C���f��[T�N�;]iF����Ë����{���ތZ����e����%�i@�؂z�ѐ��mŮDk�;K�6n/�׫����spW�����o�,i���qs��F��7��zY1QmFZo=��殘>�;`��d�k���Xk|B�z���k���8(��)��->N���?�?1	bb^��T�o�N�         &   x�3��3�2��3�2��3�2��3�2��3����� I8�           x���=j�0����:@#�i�>D������i3'C�gJ�FZ\(]J��EB	NoQI]�7���Gy�1ޞ��#�}���Ym40�Ĉd#*��
�a&��҂pF�<�������h����X�'��{5�T���TguE�e������Z��N�����9��w۾�<.V`|��Աw��ڻ��$�eX���n�G=d�nӅ�g�f��a���1�^�_�x7p=E3g�F~����ax
yE�a��W�'Y�'I�ƴ��      �   #   x�3�,-N-�2��M�M2�9Sr3�b���� }�            x������ � �      �   �   x�]�MN�@ ���)Xt�0?���,Qc�tj�J���NS$�8��p6���(11yyy���1Jݴ�<7�~�e�F���.'�� ��b�9ph��<��9���*�śښ-����+���6�dZd�^H�}�#��2�	dW U��Affw:~���U�7�׾lՇ*5���x�%�K������h?/VYQn�,m���8�/к��2��H�շ�|�5�^��L��%�~OO�         i  x����KA��o���5��ܽ�%O85��-#dMBA�C���0�D�{���X�e��hfW��_�0�yo�|�w��!�Q(�7C��ק���i��{����%!�5n58�6��mt�:{n����!���`�aBJI�_�(�)���^H�,�sjEx��t���H=p�)wz�N(	��T��1Ơz���i؜66�؂�9ql�逎Y�D~)��).�Գ�ґ�L]E�ңxNoC�b]}�k!��N�*2GT?��PV�F]�`���%�+�yV�N+�K�8�S����*'j8���>��^�.4R�V5�2�K��m�kD��?*W��ĸ����F��lBR�xd�F�1EQ~ Bɇ<     